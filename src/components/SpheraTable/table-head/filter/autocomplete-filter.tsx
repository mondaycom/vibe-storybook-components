import React, { useState } from 'react';
import { Button, Checkbox, Search } from 'monday-ui-react-core';
import styles from './filter.module.scss';

export interface AutocompleteFilterProps {
  onChange: any;
  value: Array<string>;
  options?: Array<{ label: string; value: string }>;
}

export const AutocompleteFilter = ({ onChange, value, options }: AutocompleteFilterProps) => {
  const [search, setSearch] = useState<string>('');

  const comboOptions = options || [];

  const addValue = (val: string) => {
    const newVal = [...new Set([...value, val])];
    onChange(newVal);
  };
  const removeValue = (val: string) => {
    const newVal = value.filter((i: any) => i !== val);
    onChange(newVal);
  };

  return (
    <>
      <Search
        size={Search.sizes?.SMALL}
        placeholder="Search"
        onChange={v => setSearch(v)}
        value={search}
        wrapperClassName={styles.search}
      />
      <div className={styles.optionsList}>
        {comboOptions
          .filter(o => {
            const opt = o.label.toLowerCase();
            const searchVal = (search || '').toLowerCase();
            return opt.includes(searchVal);
          })
          .sort(
            (a, b) =>
              (value.includes(b.label) ? 1 : -1) - (value.includes(a.label) ? 1 : -1) || a.label.localeCompare(b.label)
          )
          .map(o => (
            <Checkbox
              className={styles.checkbox}
              key={o.value}
              label={o.label}
              onChange={() => (value.includes(o.label) ? removeValue(o.label) : addValue(o.label))}
              checked={value.includes(o.label)}
            />
          ))}
      </div>
      <Button
        className={styles.clearButton}
        kind={Button.kinds?.TERTIARY}
        onClick={() => onChange([])}
        size={Button.sizes?.SMALL}
      >
        Clear filters
      </Button>
    </>
  );
};
