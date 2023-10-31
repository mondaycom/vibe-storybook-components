import { GithubContributorResponse } from './github-contributors-types';

export async function fetchContributors(organizationName: string, packageName: string, page: number) {
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

export async function fetchAllContributors(organizationName: string, packageName: string) {
  let contributors: GithubContributorResponse[] = [];
  let page = 1;
  let list;
  do {
    list = await fetchContributors(organizationName, packageName, page++);
    contributors = contributors.concat(list);
  } while (list.length > 0);

  return contributors;
}
