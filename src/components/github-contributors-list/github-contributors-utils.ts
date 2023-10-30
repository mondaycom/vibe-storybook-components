export type GithubContributor = {
  name: string;
  href: string;
  key?: string;
  contributions?: number;
};

export type GithubContributorResponse = {
  id: number;
  login: string;
  html_url: string;
  contributions: number;
};

export async function getContributors(organizationName: string, packageName: string, page: number) {
  const request = await fetch(
    `https://api.github.com/repos/${organizationName}/${packageName}/contributors?per_page=100&page=${page}&order=desc`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return await request.json();
}

export async function getAllContributors(organizationName: string, packageName: string) {
  let contributors: GithubContributorResponse[] = [];
  let page = 1;
  let list;
  do {
    list = await getContributors(organizationName, packageName, page++);
    contributors = contributors.concat(list);
  } while (list.length > 0);

  return contributors;
}
