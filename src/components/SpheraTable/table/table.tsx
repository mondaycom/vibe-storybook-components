import React from 'react';
import styles from './table.module.scss';

const TableWrapper = ({ children }: any) => (
  <div className={styles.container}>
    <table className={styles.table}>{children}</table>
  </div>
);

export default TableWrapper;
