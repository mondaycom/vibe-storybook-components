import { useEffect, useMemo, useState } from 'react';
import { Contributors } from './contributors';
import Paragraph from '../../../src/components/paragraph/paragraph';
import styles from './github-contributors-list.module.scss';

const excludedDevelopers = new Set();

async function getContributors(page) {
  let request = await fetch(
    `https://api.github.com/repos/mondaycom/vibe-storybook-components/contributors?per_page=100&page=${page}&order=desc`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return await request.json();
}

async function getAllContributors() {
  let contributors = [];
  let page = 1;
  let list;
  do {
    list = await getContributors(page++);
    contributors = contributors.concat(list);
  } while (list.length > 0);

  return contributors;
}

export const GithubContributorsList = () => {
  const [contributorsJson, setContributorsJson] = useState();
  useEffect(() => {
    getAllContributors().then(contributors => setContributorsJson(contributors));
  }, []);

  const contributors = useMemo(() => {
    if (contributorsJson && Array.isArray(contributorsJson)) {
      // developer contributors
      const developerContributors = contributorsJson
        .filter(contributor => !excludedDevelopers.has(contributor.id))
        .sort((a, b) => b.contributions - a.contributions)
        .map(contributor => ({
          name: contributor.login,
          href: contributor.html_url,
          key: contributor.id,
        }));
      return <Contributors contributorsData={developerContributors} />;
    }
  }, [contributorsJson]);

  return <Paragraph className={styles.contributorsList}>{contributors}</Paragraph>;
};
