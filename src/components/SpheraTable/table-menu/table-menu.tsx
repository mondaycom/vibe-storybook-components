import React from 'react';
import classNames from 'classnames';
import { Button, Dialog, DialogContentContainer, Search, useSwitch } from 'monday-ui-react-core';
import { Hide, Download, Filter } from 'monday-ui-react-core/icons';
import styles from './table-menu.module.scss';
import ColumnsSelection from './column-selection';

interface TableMenuProps {
  globalFilter: string;
  setGlobalFilter: (text: string) => void;
  onExport: () => void;
  resetFilters: () => void;
  className?: string;
  selectAllColumns: () => void;
  isServerSideFiltering?: boolean;
  columns: Array<{
    text: string;
    value: string;
    onClick: (e: any) => void;
    selected: boolean;
  }>;
  additionalItems?: {
    start?: React.ReactNode;
    end?: React.ReactNode;
  };
  hide?:
    | boolean
    | {
        search?: boolean;
        hideShowColumns?: boolean;
        resetFilters?: boolean;
        export?: boolean;
      };
}
const modifiers = [
  {
    name: 'preventOverflow',
    options: {
      mainAxis: false,
    },
  },
];
const TableMenu = ({
  globalFilter,
  setGlobalFilter,
  onExport,
  columns,
  selectAllColumns,
  resetFilters,
  className,
  additionalItems,
  isServerSideFiltering,
  hide,
}: TableMenuProps) => {
  const { onChange: switchClickOutsideActive, isChecked } = useSwitch({
    defaultChecked: false,
  });
  if (typeof hide === 'boolean') {
    return null;
  }
  return (
    <div className={classNames(styles.tableMenu, className)}>
      {additionalItems?.start}
      {!hide?.search && !isServerSideFiltering && (
        <div className={styles.globalSearch}>
          <Search size={Search.sizes?.SMALL} placeholder="Search" onChange={setGlobalFilter} value={globalFilter} />
        </div>
      )}
      {!hide?.hideShowColumns && (
        <Dialog
          open={isChecked}
          modifiers={modifiers}
          onClickOutside={switchClickOutsideActive}
          position={Dialog.positions.BOTTOM}
          showTrigger={[Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.CLICK_OUTSIDE]}
          content={
            <DialogContentContainer className={styles.dialogContent}>
              <ColumnsSelection selectAllColumns={selectAllColumns} columns={columns} />
            </DialogContentContainer>
          }
        >
          <Button
            onClick={switchClickOutsideActive}
            active={isChecked}
            size={Button.sizes?.SMALL}
            kind={Button.kinds?.TERTIARY}
            leftIcon={Hide}
          >
            Hide/ show columns
          </Button>
        </Dialog>
      )}
      {!hide?.resetFilters && (
        <div className={styles.resetFiltersContainer}>
          <div className={styles.resetFiltersLine} />
          <Button
            onClick={resetFilters}
            className={styles.actionIcon}
            size={Button.sizes?.SMALL}
            kind={Button.kinds?.TERTIARY}
            leftIcon={Filter}
          >
            Reset filters
          </Button>
        </div>
      )}

      {!hide?.export && (
        <Button
          onClick={onExport}
          className={styles.actionIcon}
          size={Button.sizes?.SMALL}
          kind={Button.kinds?.TERTIARY}
          leftIcon={Download}
        >
          Export
        </Button>
      )}
      {additionalItems?.end}
    </div>
  );
};

export default TableMenu;
