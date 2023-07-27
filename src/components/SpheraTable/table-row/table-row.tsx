import classNames from 'classnames';
import React from 'react';
import styles from './table-row.module.scss';

interface TableRowProps {
  hover?: boolean;
  children: React.ReactNode;
}

const TableRow = ({ children, hover, ...rest }: TableRowProps) => (
  <tr {...rest} className={classNames(styles.tr, { [styles.hover]: hover })}>
    {children}
  </tr>
);

export default TableRow;
