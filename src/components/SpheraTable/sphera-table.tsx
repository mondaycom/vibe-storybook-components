import React, { CSSProperties, Fragment, useCallback, useState } from 'react';

import classnames, { Argument } from 'classnames';
import { Skeleton } from 'monday-ui-react-core';

import {
  Cell,
  Row,
  Header,
  HeaderGroup,
  Column,
  ColumnDef,
  OnChangeFn,
  ColumnFiltersState,
  SortingState,
  PaginationState,
  VisibilityState,
  TableOptions,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getSortedRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnFilter,
  createRow,
} from '@tanstack/react-table';
import TableMenu from './table-menu/table-menu';
import { useQueryFilter } from './hooks/use-query-filter';

import { SpheraTableCell } from './sphera-table-cell';
import TableBody from './table-body/table-body';
import TableCell from './table-cell/table-cell';
import TableFooter from './table-footer/table-footer';
import THead from './table-head/table-head';
import TableRow from './table-row/table-row';
import TableWrapper from './table/table';

import styles from './sphera-table.module.scss';

import { filterOptionsToQuery } from './services/query-params-service';
import { handleCsvExport } from './sphera-table-utils';

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData, TValue> {
    filterType?: string;
    additionalCellClasses?: (cell: Cell<TData, TValue>, row: Row<TData>) => Argument;
    additionalCellStyles?: (cell: Cell<TData, TValue>, row: Row<TData>) => CSSProperties | undefined;
    additionalHeaderClasses?: (header: Header<TData, TValue>, headerGroup: HeaderGroup<TData>) => Argument;
    additionalHeaderStyles?: (
      header: Header<TData, TValue>,
      headerGroup: HeaderGroup<TData>
    ) => CSSProperties | undefined;
  }
}

const getColumnId = <T,>(column: Column<T, unknown>): string =>
  column.columnDef.header && typeof column.columnDef.header !== 'function'
    ? column.columnDef.header.toString()
    : column.columnDef.id || column.id;

export type SpheraTableProps<T> = {
  tableId: string;
  columns: Array<ColumnDef<T>>;
  data: Array<T>;
  isLoading?: boolean;
  rowsClickable?: boolean;
  rowClickAction?: (event: React.MouseEvent, row: Row<T>) => void;
  isExpandable?: boolean;
  renderSubComponent?: (row: Row<T>) => React.ReactElement;
  serverSideFiltering?: boolean;
  onFilterModelChange?: OnChangeFn<ColumnFiltersState>;
  filterState?: ColumnFiltersState;
  serverSideSorting?: boolean;
  onSortingChange?: OnChangeFn<SortingState>;
  sortingState?: SortingState;
  serverSidePagination?: boolean;
  onPageChange?: OnChangeFn<PaginationState>;
  paginationState?: PaginationState;
  rowCount?: number;
  disablePagination?: boolean;
  defaultColumn?: Partial<ColumnDef<T>>;
  preRows?: Array<T>; // Rows to be rendered before all the other data, will not be affected by filters and sorting
  initialColumnVisibilityState?: VisibilityState;
  disableScroll?: boolean;
  headerStackDirection?: 'row' | 'column';
  onCsvExport?: (data?: any) => Promise<string>;
  exportRawData?: boolean;
  containerClassName?: string;
  menu?: {
    className?: string;
    hide?:
      | boolean
      | {
          search?: boolean;
          hideShowColumns?: boolean;
          resetFilters?: boolean;
          export?: boolean;
        };
    components?: {
      start?: React.ReactNode;
      end?: React.ReactNode;
    };
  };
};

// Comma after T is required because this is a tsx file
export const SpheraTable = <T,>(props: SpheraTableProps<T>) => {
  const {
    tableId,
    columns,
    data,
    isLoading,
    rowsClickable,
    rowClickAction,
    isExpandable,
    renderSubComponent,
    serverSideFiltering,
    onFilterModelChange,
    filterState,
    serverSideSorting,
    onSortingChange,
    sortingState,
    serverSidePagination,
    onPageChange,
    paginationState,
    rowCount,
    disablePagination,
    defaultColumn,
    preRows,
    initialColumnVisibilityState,
    disableScroll,
    headerStackDirection,
    onCsvExport,
    exportRawData,
    containerClassName,
    menu,
  } = props;
  const [columnVisibility, setColumnVisibility] = useState(initialColumnVisibilityState || {});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 50 });
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const getFiltersValue = (header: Header<T, unknown>): Array<string> => {
    const filtersState = serverSideFiltering ? filterState || ([] as ColumnFiltersState) : columnFilters;
    const headerFilter = filtersState.find(col => col.id === header.column.id);
    return filtersState.length > 0 && headerFilter ? (headerFilter.value as Array<string>) : [];
  };
  const reactTableModel: TableOptions<T> = {
    data,
    columns,
    state: {
      columnVisibility,
      columnFilters,
      sorting: serverSideSorting ? sortingState : sorting,
    },
    manualSorting: serverSideSorting,
    onSortingChange: serverSideSorting ? onSortingChange : setSorting,
    manualFiltering: serverSideFiltering,
    onColumnFiltersChange: serverSideFiltering ? onFilterModelChange : setColumnFilters,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
  };

  if (defaultColumn) {
    reactTableModel.defaultColumn = defaultColumn;
  }

  let firstItem = 1;
  let lastItem = data.length;
  let allItems = rowCount || data.length;

  if (!disablePagination && reactTableModel.state) {
    if (serverSidePagination && paginationState) {
      reactTableModel.state.pagination = paginationState;
      reactTableModel.manualPagination = true;
      reactTableModel.onPaginationChange = onPageChange;
      reactTableModel.pageCount = Math.ceil(allItems / paginationState.pageSize);
    } else {
      reactTableModel.state.pagination = pagination;
      reactTableModel.manualPagination = false;
      reactTableModel.onPaginationChange = setPagination;
    }
    reactTableModel.getPaginationRowModel = getPaginationRowModel();
  }

  const table = useReactTable(reactTableModel);

  const onQueryFiltersChange = useCallback((query: string) => {
    const columnFiltersFromQuery: Array<ColumnFilter> = [];
    const urlSearchParams = new URLSearchParams(query);
    urlSearchParams.forEach((v, k) => {
      const paramParts = k.split('_');
      const tableIdFromQuery = paramParts[1];
      if (tableIdFromQuery !== tableId) {
        return;
      }
      const columnIdFromQuery = paramParts[2];
      const foundColumns = table.getAllColumns().find(c => c.id === columnIdFromQuery);
      if (!foundColumns) {
        return;
      }
      if (foundColumns?.columnDef.meta?.filterType === 'autocomplete') {
        columnFiltersFromQuery.push({ id: columnIdFromQuery, value: v.split(',') });
      } else {
        columnFiltersFromQuery.push({ id: columnIdFromQuery, value: v });
      }
    });
    if (serverSideFiltering && onFilterModelChange) {
      onFilterModelChange(columnFiltersFromQuery);
    } else {
      setColumnFilters(columnFiltersFromQuery);
    }
  }, []);

  useQueryFilter({
    tableId,
    filterObject: serverSideFiltering ? (filterState as ColumnFiltersState) : columnFilters,
    filterToQuery: filterOptionsToQuery,
    onNavigationQueryChange: onQueryFiltersChange,
  });

  if (!disablePagination) {
    firstItem = table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1;
    lastItem =
      table.getState().pagination.pageIndex * table.getState().pagination.pageSize + table.getRowModel().rows.length;
    allItems = serverSidePagination && rowCount ? rowCount : table.getPrePaginationRowModel().rows.length;
  }

  return (
    <>
      <TableMenu
        additionalItems={menu?.components}
        className={menu?.className || ''}
        hide={menu?.hide}
        isServerSideFiltering={serverSideFiltering}
        resetFilters={() => {
          table.resetColumnFilters();
          table.resetGlobalFilter();
        }}
        selectAllColumns={() => {
          const areAllColumnsVisible = table.getAllLeafColumns().every(c => c.getIsVisible());
          table.getAllLeafColumns().forEach(c => c.toggleVisibility(!areAllColumnsVisible));
        }}
        columns={table.getAllLeafColumns().map(column => ({
          text: getColumnId(column),
          value: column.id,
          onClick: e => {
            column.getToggleVisibilityHandler()(e);
            return false;
          },
          selected: column.getIsVisible(),
        }))}
        onExport={async () => {
          onCsvExport ? await handleCsvExport<T>(table, onCsvExport, exportRawData) : undefined;
        }}
        globalFilter={table.getState().globalFilter}
        setGlobalFilter={table.setGlobalFilter}
      />

      <div
        className={classnames(
          {
            [styles.container]: true,
            [styles.containerHeight]: !disableScroll,
            [styles.containerHeightWithMenu]: !menu?.hide,
          },
          containerClassName
        )}
      >
        <TableWrapper>
          <THead
            direction={headerStackDirection}
            headersGroups={table.getHeaderGroups().map(headerGroup => ({
              ...headerGroup,
              headers: headerGroup.headers.map(header => ({
                ...header,
                filterValue: getFiltersValue(header),
                filterOptions:
                  header.column.columnDef.meta?.filterType === 'autocomplete'
                    ? [
                        ...new Set(
                          data
                            .map((element: T, index) =>
                              header?.column?.accessorFn
                                ? header.column.accessorFn(element, index)
                                : (element as any)[header.column.id]
                            )
                            .filter(element => Boolean(element))
                        ),
                      ].map(value => ({
                        label: value,
                        value,
                      }))
                    : undefined,
              })),
            }))}
          />

          <TableBody>
            {isLoading && (
              <TableRow key="loadingRow">
                {table.getAllLeafColumns().map(col => (
                  <TableCell compact={false} key={`loading_${col.id}`}>
                    <Skeleton height={45} />
                  </TableCell>
                ))}
              </TableRow>
            )}
            {preRows &&
              preRows.map((row, rIndex) => {
                const tableRow = createRow(table, `preRows-${rIndex}`, row, rIndex, 0);
                return (
                  <Fragment key={`f-${tableRow.id}`.toString()}>
                    <TableRow hover key={tableRow.id}>
                      {table.getVisibleLeafColumns().map(column => {
                        const cell = tableRow.getAllCells().find(c => c.column.id === column.id);
                        if (!cell) {
                          return null;
                        }
                        return SpheraTableCell({
                          compact: false,
                          cell,
                          row: tableRow,
                          rowsClickable,
                          isLoading,
                        });
                      })}
                    </TableRow>
                  </Fragment>
                );
              })}
            {table.getRowModel().rows.map(row => (
              <Fragment key={row.id}>
                <TableRow
                  hover
                  key={row.id}
                  {...(rowClickAction && { onClick: (event: React.MouseEvent) => rowClickAction(event, row) })}
                >
                  {row.getVisibleCells().map(cell =>
                    SpheraTableCell({
                      compact: false,
                      cell,
                      row,
                      rowsClickable,
                      isLoading,
                    })
                  )}
                </TableRow>
                {isExpandable && renderSubComponent && row.getIsExpanded() && (
                  <TableRow key={`${row.id}-rowSubComponent`}>
                    <TableCell compact={false} colSpan={row.getVisibleCells().length}>
                      {renderSubComponent(row)}
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))}
            {!isLoading && table.getRowModel().rows.length === 0 && (
              <TableRow key="resetFiltersRow">
                <TableCell compact={false} colSpan={table.getVisibleLeafColumns().length} align="center">
                  Looks like nothing matched those filters... 🤔
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter
            previousPage={table.getCanPreviousPage() ? () => table.previousPage() : undefined}
            nextPage={table.getCanNextPage() ? () => table.nextPage() : undefined}
            pageSize={table.getState().pagination.pageSize}
            setPageSize={(value: number) => table.setPageSize(value)}
            disablePagination={disablePagination}
            columns={table.getAllColumns()}
            pageText={`${firstItem}-${lastItem} of ${allItems}`}
          />
        </TableWrapper>
      </div>
    </>
  );
};
