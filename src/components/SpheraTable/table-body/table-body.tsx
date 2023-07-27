import classNames from 'classnames';
import React from 'react';
import styles from './table-body.module.scss';

interface TableBodyProps {
  children: React.ReactNode;
}

const TableBody = ({ children }: TableBodyProps) => <tbody className={classNames(styles.body)}>{children}</tbody>;

export default TableBody;
