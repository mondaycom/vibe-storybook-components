import { FC, useEffect, useMemo, useState } from 'react';
import ContributorsList from './contributors-list';
import Paragraph from '../../../src/components/paragraph/paragraph';
import { getAllContributors, GithubContributor, GithubContributorResponse } from './github-contributors-utils';
import styles from './github-contributors-list.module.scss';

interface GithubContributorsListProps {
  organizationName: string;
  packageName: string;
  text?: string;
  showContributionAmount?: boolean;
  excludedDevelopersIds?: Set<string>;
  staticContributors?: GithubContributor[];
}

const GithubContributorsList: FC<GithubContributorsListProps> = ({
  organizationName,
  packageName,
  excludedDevelopersIds = new Set(),
  staticContributors = [],
  text = 'Thanks to all of our contributors: ',
  showContributionAmount = false,
}) => {
  const [contributorsJson, setContributorsJson] = useState<GithubContributorResponse[]>();
  useEffect(() => {
    getAllContributors(organizationName, packageName).then(contributors => setContributorsJson(contributors));
  }, []);

  const contributors = useMemo(() => {
    if (contributorsJson && Array.isArray(contributorsJson)) {
      // developer contributors
      const developerContributors = contributorsJson
        .filter(contributor => !excludedDevelopersIds.has(contributor.id))
        .sort((a, b) => (b?.contributions || 0) - (a?.contributions || 0))
        .map(contributor => ({
          name: contributor.login,
          href: contributor.html_url,
          key: contributor.id,
          contributions: contributor.contributions,
        }));
      const contributorsData = staticContributors.concat(developerContributors);
      return <ContributorsList contributorsData={contributorsData} showContributionAmount={showContributionAmount} />;
    }
  }, [contributorsJson]);

  return (
    <Paragraph className={styles.contributorsList}>
      <>
        {text}
        {contributors}
      </>
    </Paragraph>
  );
};

export default GithubContributorsList;
