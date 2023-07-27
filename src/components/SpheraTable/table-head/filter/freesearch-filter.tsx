import { Search } from 'monday-ui-react-core';
import React from 'react';

export interface FreesearchFilterProps {
  onChange: any;
  value: string;
}

export const FreesearchFilter = ({ onChange, value }: FreesearchFilterProps) => (
  <Search size={Search.sizes?.SMALL} value={value} onChange={onChange} placeholder="Filter..." />
);
