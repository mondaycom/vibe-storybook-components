import React, { useState } from 'react';
import { Checkbox, Search } from 'monday-ui-react-core';
import styles from './table-menu.module.scss';

interface ColumnsSelectionProps {
  selectAllColumns: () => void;
  columns: Array<{
    text: string;
    value: string;
    onClick: (e: any) => void;
    selected: boolean;
  }>;
}

const ColumnsSelection = ({ columns, selectAllColumns }: ColumnsSelectionProps) => {
  const [search, setSearch] = useState<string>('');

  const filterFunction = (text: string) => !search || text.toLowerCase().includes(search.toLowerCase());
  return (
    <>
      <Search size={Search.sizes?.SMALL} placeholder="Search" onChange={v => setSearch(v)} value={search} />
      <div className={styles.optionsList}>
        <Checkbox
          className={styles.checkbox}
          label="All columns"
          onChange={selectAllColumns}
          checked={columns.every(c => c.selected)}
        />
        {columns
          .filter(column => filterFunction(column.text))
          .map(c => (
            <Checkbox
              className={styles.checkbox}
              key={c.text}
              label={c.text}
              onChange={c.onClick}
              checked={c.selected}
            />
          ))}
      </div>
    </>
  );
};

export default ColumnsSelection;
