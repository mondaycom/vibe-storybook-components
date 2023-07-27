import React from 'react';

import classnames from 'classnames';

import { Skeleton } from 'monday-ui-react-core';
import { Cell, flexRender, Row } from '@tanstack/react-table';

import TableCell from './table-cell/table-cell';

export interface SpheraTableCellProps<TData, TValue> {
  cell: Cell<TData, TValue>;
  row: Row<TData>;
  rowsClickable?: boolean;
  isLoading?: boolean;
  compact: boolean;
}

export const SpheraTableCell = <TData, TValue>({
  cell,
  row,
  rowsClickable,
  isLoading,
  compact,
}: SpheraTableCellProps<TData, TValue>) => (
  <TableCell
    compact={compact}
    {...{
      key: cell.id,
      style: {
        width: cell.column.getSize(),
        maxWidth: cell.column.columnDef.maxSize,
        cursor: rowsClickable ? 'pointer' : 'default',
        ...((cell.column.columnDef.meta?.additionalCellStyles
          ? cell.column.columnDef.meta?.additionalCellStyles(cell, row)
          : {}) as any),
      },
      className: classnames(
        cell.column.columnDef.meta?.additionalCellClasses
          ? cell.column.columnDef.meta?.additionalCellClasses(cell, row)
          : {}
      ),
    }}
  >
    {isLoading ? <Skeleton height={45} /> : flexRender(cell.column.columnDef.cell, cell.getContext())}
  </TableCell>
);
