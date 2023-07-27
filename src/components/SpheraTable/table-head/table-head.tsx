import React, { useRef, useState } from 'react';

import classnames from 'classnames';

import { flexRender, Header, HeaderGroup } from '@tanstack/react-table';

import TableCell from '../table-cell/table-cell';
import TableRow from '../table-row/table-row';
import Filter from './filter/filter';
import SortButton from './sort-button/sort-button';

import styles from './table-head.module.scss';

interface TableHeaderProps<T> {
  direction?: 'row' | 'column';
  headersGroups: Array<HeaderGroup<T>>;
}
interface HeaderWithFilters<T> extends Header<T, unknown> {
  filterValue: Array<string>;
  filterOptions: Array<string>;
}

const THead = <T,>({ direction, headersGroups }: TableHeaderProps<T>) => {
  const ref = useRef(null);
  const [hoverdCells, setHoverCells] = useState<{ [key: string]: boolean }>({});
  return (
    <thead ref={ref} className={styles.thead}>
      {headersGroups.map(headerGroup =>
        headerGroup.headers.every(h => h.column.columnDef.header === undefined) ? null : (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              const { filterValue, filterOptions } = header as HeaderWithFilters<T>;
              const isHovered = hoverdCells[header.id];
              return (
                <TableCell
                  key={header.id}
                  {...{
                    head: true,
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                      verticalAlign: 'unset',
                      ...(header.column.columnDef.meta?.additionalHeaderStyles
                        ? header.column.columnDef.meta?.additionalHeaderStyles(header, headerGroup)
                        : ({} as any)),
                    },
                    className: classnames(
                      header.column.columnDef.meta?.additionalHeaderClasses
                        ? header.column.columnDef.meta?.additionalHeaderClasses(header, headerGroup)
                        : {}
                    ),
                  }}
                >
                  <div
                    onMouseEnter={() => setHoverCells({ ...hoverdCells, [header.id]: true })}
                    onMouseLeave={() => setHoverCells({ ...hoverdCells, [header.id]: false })}
                    className={classnames(styles.headerContainer, {
                      [styles.headerContainerRow]: direction !== 'column',
                    })}
                  >
                    <div className={styles.headerContentContainer}>
                      {header.isPlaceholder ? null : (
                        <span className={styles.headerTitle}>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </span>
                      )}
                      {header.column.getCanFilter() && (
                        <Filter
                          value={filterValue}
                          type={header.column.columnDef.meta?.filterType}
                          onChange={header.column.setFilterValue}
                          options={filterOptions as unknown as Array<{ label: string; value: string }>}
                          hidden={!isHovered && filterValue.length === 0}
                        />
                      )}
                      {header.column.getCanSort() && (
                        <SortButton
                          type={header.column.getIsSorted()}
                          onClick={header.column.getToggleSortingHandler()}
                          hidden={!isHovered && !header.column.getIsSorted()}
                        />
                      )}
                    </div>
                  </div>
                </TableCell>
              );
            })}
          </TableRow>
        )
      )}
    </thead>
  );
};

export default THead;
