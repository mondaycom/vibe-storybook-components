import classNames from 'classnames';
import React, { Ref } from 'react';
import styles from './table-cell.module.scss';

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  compact?: boolean;
  head?: boolean;
  ref?: Ref<HTMLTableCellElement>;
}

const TableCell = ({ children, className, compact, head, ref, ...rest }: TableCellProps) => {
  const Element = head ? 'th' : 'td';

  return (
    <Element
      ref={ref}
      {...rest}
      className={classNames(
        styles.cell,
        {
          [styles.compact]: compact,
          [styles.head]: head,
        },
        className
      )}
    >
      {children}
    </Element>
  );
};

export default TableCell;
