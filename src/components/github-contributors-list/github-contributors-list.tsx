import { FC, useEffect, useMemo, useState } from 'react';
import ContributorsList from './contributors-list';
import Paragraph from '../../../src/components/paragraph/paragraph';
import { getAllContributors, GithubContributor, GithubContributorResponse } from './github-contributors-utils';

interface GithubContributorsListProps {
  organizationName: string;
  packageName: string;
  text?: string;
  showContributionAmount?: boolean;
  excludedContributorsIds?: Set<number>;
  staticContributors?: GithubContributor[];
}

const GithubContributorsList: FC<GithubContributorsListProps> = ({
  organizationName,
  packageName,
  excludedContributorsIds = new Set(),
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
        .filter(contributor => !excludedContributorsIds.has(contributor.id))
        .sort((a, b) => (b?.contributions || 0) - (a?.contributions || 0))
        .map(
          contributor =>
            ({
              name: contributor.login,
              href: contributor.html_url,
              key: contributor.id.toString(),
              contributions: contributor.contributions,
            }) as GithubContributor,
        );
      const contributorsData = staticContributors.concat(developerContributors);
      return <ContributorsList contributorsData={contributorsData} showContributionAmount={showContributionAmount} />;
    }
  }, [contributorsJson]);

  return (
    <Paragraph>
      <>
        {text}
        {contributors}
      </>
    </Paragraph>
  );
};

export default GithubContributorsList;
