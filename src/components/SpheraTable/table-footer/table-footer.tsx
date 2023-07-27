import React from 'react';
import { Column } from '@tanstack/react-table';
import { IconButton, Dropdown } from 'monday-ui-react-core';
import { NavigationChevronLeft, NavigationChevronRight } from 'monday-ui-react-core/icons';
import TableCell from '../table-cell/table-cell';
import TableRow from '../table-row/table-row';
import styles from './table-footer.module.scss';

interface TableFooterProps<T> extends React.TdHTMLAttributes<HTMLTableElement> {
  disablePagination?: boolean;
  columns: Array<Column<T, unknown>>;
  pageSize: number;
  setPageSize: (size: number) => void;
  pageText: string;
  previousPage?: () => void;
  nextPage?: () => void;
}
const TableFooter = <T,>({
  previousPage,
  pageSize,
  setPageSize,
  disablePagination,
  columns,
  pageText,
  nextPage,
}: TableFooterProps<T>) => (
  <tfoot className={styles.footer}>
    <TableRow key="footerRow">
      <TableCell colSpan={columns.length} align="center" className={styles.disableBorder}>
        <div className={styles.row}>
          {!disablePagination && (
            <>
              <Dropdown
                menuPortalTarget={
                  document.getElementsByTagName('footer')[0] ? document.getElementsByTagName('footer')[0] : undefined
                }
                className={styles.textInput}
                dropdownMenuWrapperClassName={styles.options}
                clearable={false}
                size={Dropdown.size.SMALL}
                value={{ label: pageSize, value: pageSize }}
                optionWrapperClassName={styles.option}
                onChange={(option: { value: string }) => setPageSize(Number(option.value))}
                options={[25, 50, 100].map(option => ({
                  label: option,
                  value: option,
                }))}
              />
              <div className={styles.rowsPerPage}>Rows per page</div>
            </>
          )}
          <div className={`${styles.centeredText} ${styles.pagination}`}>{pageText}</div>
          {!disablePagination && (
            <>
              <IconButton
                className={styles.prevButton}
                icon={NavigationChevronLeft}
                disabled={!previousPage}
                onClick={() => previousPage && previousPage()}
              />
              <IconButton
                className={styles.nextButton}
                icon={NavigationChevronRight}
                disabled={!nextPage}
                onClick={() => nextPage && nextPage()}
              />
            </>
          )}
        </div>
      </TableCell>
    </TableRow>
  </tfoot>
);

export default TableFooter;
