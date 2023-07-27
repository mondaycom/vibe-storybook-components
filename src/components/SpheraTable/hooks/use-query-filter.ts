import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ColumnFilter, ColumnFiltersState } from '@tanstack/react-table';

import { locationSearchToQueryParams, queryFilterPrefix } from '../services/query-params-service';

type QueryFilterProps = {
  tableId: string;
  filterObject: ColumnFiltersState;
  filterToQuery: (tableId: string, obj: Array<ColumnFilter>) => string;
  onNavigationQueryChange: (query: string) => void;
  debounceInMS?: number;
};

export const useQueryFilter = ({
  tableId,
  filterObject,
  filterToQuery,
  onNavigationQueryChange,
  debounceInMS = 0,
}: QueryFilterProps) => {
  const location = useLocation();
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState(() => locationSearchToQueryParams(location.search));

  // Set query params from url to state on search change
  useEffect(() => {
    if (onNavigationQueryChange) {
      // Create filter options object
      const query = locationSearchToQueryParams(location.search);
      onNavigationQueryChange(query);
    }
  }, [location.search, onNavigationQueryChange]);

  useEffect(() => {
    const debouncer = setTimeout(() => {
      if (searchQuery) {
        history.replace({ pathname: location.pathname, search: searchQuery });
      } else {
        history.replace({ pathname: location.pathname, search: '' });
      }
    }, debounceInMS);

    return () => {
      clearTimeout(debouncer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const filtersQuery = filterToQuery(tableId, filterObject);
    const currentQueryWithoutFilters = location.search
      .replace('?', '')
      .split('&')
      .filter(p => p.length > 0 && !p.startsWith(`${queryFilterPrefix}_${tableId}`))
      .join('&');
    const query = [currentQueryWithoutFilters, filtersQuery].filter(p => p.length > 0).join('&');
    setSearchQuery(query);
  }, [filterObject, filterToQuery]);
};
