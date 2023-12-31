#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { execaSync } from 'execa';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import packageJson from '../package.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VERSION_STRATEGIES = {
  PATCH: 'patch',
  MINOR: 'minor',
  MAJOR: 'major',
};

const CHANGELOG_HEADERS = {
  TITLE: '# Changelog',
  UNRELEASED_VERSION: '## Unreleased',
  BREAKING_CHANGES: '#### Breaking Changes',
  BUGS: '#### Bug Fixes',
  NEW_FEATURES: '#### New Features',
  DEPENDENCIES: '#### Dependency Upgrades',
  COMMITTERS: '#### Committers',
};

const CHANGELOG_PATH = path.join(__dirname, '..', 'CHANGELOG.md');

const CHANGES_THAT_BUMP_MAJOR = [CHANGELOG_HEADERS.BREAKING_CHANGES];
const CHANGES_THAT_BUMP_MINOR = [CHANGELOG_HEADERS.NEW_FEATURES];
const CHANGES_THAT_BUMP_PATCH = [CHANGELOG_HEADERS.BUGS, CHANGELOG_HEADERS.DEPENDENCIES];

function release() {
  validateGithubAuthToken();
  const rawChangesText = buildChangelogSinceLastVersion();
  const newVersionStrategy = getNewVersionStrategy(rawChangesText);

  // There's nothing to release for, print a friendly message and exit
  if (!newVersionStrategy) {
    logNothingToDo(rawChangesText);
  }

  bumpVersion(newVersionStrategy);
  const newChangelogSection = formatChanges(rawChangesText);
  updateChangelog(newChangelogSection);
}

function updateChangelog(newChangelogSection) {
  const currentChangelog = readFileSync(CHANGELOG_PATH, 'utf8');

  const newChangelog = currentChangelog.replace(
    CHANGELOG_HEADERS.TITLE,
    [CHANGELOG_HEADERS.TITLE, '', newChangelogSection].join('\n'),
  );

  writeFileSync(CHANGELOG_PATH, newChangelog, 'utf8');
}

function formatChanges(changelogText) {
  const currentVersion = getCurrentVersion();

  let newchangelogText = changelogText.replace(CHANGELOG_HEADERS.UNRELEASED_VERSION, `## ${currentVersion}`);

  const commitersHeaderIndex = newchangelogText.indexOf(CHANGELOG_HEADERS.COMMITTERS);

  newchangelogText = newchangelogText.substring(0, commitersHeaderIndex);

  newchangelogText = newchangelogText.trim();

  return newchangelogText;
}

function buildChangelogSinceLastVersion() {
  const { stdout } = execaSync('npx', ['lerna-changelog', '--from', `v${packageJson.version}`]);

  return stdout;
}

function getNewVersionStrategy(changelogText) {
  if (CHANGES_THAT_BUMP_MAJOR.some(header => changelogText.includes(header))) {
    return VERSION_STRATEGIES.MAJOR;
  }

  if (CHANGES_THAT_BUMP_MINOR.some(header => changelogText.includes(header))) {
    return VERSION_STRATEGIES.MINOR;
  }

  if (CHANGES_THAT_BUMP_PATCH.some(header => changelogText.includes(header))) {
    return VERSION_STRATEGIES.PATCH;
  }

  return null;
}

function getCurrentVersion() {
  const packageJson = JSON.parse(readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

  return packageJson.version;
}

function bumpVersion(strategy) {
  execaSync('npm', ['version', strategy]);
}

function logNothingToDo(changeLogText) {
  console.log("It seems like there's no need to release a new version, exiting");
  console.log(`Change log data for debug: ${changeLogText}`);
  process.exit(1);
}

function validateGithubAuthToken() {
  if (!process.env.GITHUB_AUTH) {
    console.log(
      chalk.red('Please make sure to provide the'),
      chalk.yellow.underline.bold('GITHUB_AUTH'),
      chalk.red('environment variable:'),
    );
    console.log();
    console.log(chalk.dim('$ GITHUB_AUTH=... npm run release'), {
      color: 'white',
      minWidth: 'full',
    });
    process.exit(0);
  }
}

release();
