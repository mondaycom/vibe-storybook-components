import { ColumnFilter } from '@tanstack/react-table';

export const queryFilterPrefix = 'filter';

const removeQuestionMark = (queryString: string): string => queryString.replaceAll('?', '');

// Remove ? from search query
export const locationSearchToQueryParams = (locationSearch: string): string => removeQuestionMark(locationSearch || '');

export const locationSearchToFilterOptions = (locationSearch: string): Array<ColumnFilter> => {
  const searchParams = locationSearchToQueryParams(locationSearch);
  const urlSearchParams = new URLSearchParams(searchParams);
  const searchParamsKeys = [...urlSearchParams.keys()];

  // Create filter options object
  return searchParamsKeys.map((id: string) => ({
    id,
    value: urlSearchParams.get(id) as string,
  }));
};

export const filterOptionsToQuery = (tableId: string, filterOptions: Array<ColumnFilter> = []): string => {
  if (!filterOptions) {
    return '';
  }

  const paramsObject = filterOptions.reduce(
    (all, { id, value }) => ({ ...all, [`${queryFilterPrefix}_${tableId}_${id}`]: value }),
    {}
  );
  return new URLSearchParams(paramsObject).toString();
};
