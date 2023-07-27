import React from 'react';
import { Sort, DropdownChevronDown, DropdownChevronUp } from 'monday-ui-react-core/icons';
import { SortDirection } from '@tanstack/react-table';
import { HeadButton } from '../head-button/head-button';
import styles from './sort-button.module.scss';

enum SortButtonType {
  asc = 'asc',
  desc = 'desc',
}

interface SortButtonProps {
  onClick?: (event: unknown) => void;
  type: SortDirection | false;
  hidden?: boolean;
}

const SortButton = ({ onClick, type, hidden }: SortButtonProps) => {
  const icon = !type
    ? Sort
    : {
        [SortButtonType.desc]: DropdownChevronDown,
        [SortButtonType.asc]: DropdownChevronUp,
      }[type];
  const iconClass = !type ? styles.iconDisable : '';

  return <HeadButton icon={icon} iconClass={iconClass} onClick={onClick} active={!!type} hidden={hidden} />;
};
export default SortButton;
