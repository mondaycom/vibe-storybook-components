import { Cell, Column, Header, Table } from '@tanstack/react-table';

export const getPreviousCellId = <TData, TValue>(
  currentCell: Cell<TData, TValue> | Header<TData, TValue>,
  allCells: Array<Cell<TData, TValue>> | Array<Column<TData, TValue>>
): string => {
  const currentCellIndexFound = allCells.findIndex(c => c.id === currentCell.id);
  const currentCellIndex = currentCellIndexFound < 0 ? 1 : currentCellIndexFound;
  const previousCell = allCells[currentCellIndex - 1];
  return previousCell ? previousCell.id : '';
};

export const handleCsvExport = async <T>(
  table: Table<T>,
  prepareCsvExport: (data?: any) => Promise<string>,
  exportRawData?: boolean | false
): Promise<string> => {
  if (exportRawData) {
    const tableData = table.getFilteredRowModel().rows.map(r => r.original);
    const response = await prepareCsvExport(tableData);
    return response;
  }

  const response = await prepareCsvExport();
  return response;
};
