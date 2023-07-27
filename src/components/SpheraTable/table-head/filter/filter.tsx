import React from 'react';
import { Filter } from 'monday-ui-react-core/icons';
import { Dialog, DialogContentContainer, useSwitch } from 'monday-ui-react-core';
import { HeadButton } from '../head-button/head-button';
import { AutocompleteFilter } from './autocomplete-filter';
import styles from './filter.module.scss';
import { FreesearchFilter } from './freesearch-filter';

export enum FilterType {
  freesearch = 'freesearch',
  autocomplete = 'autocomplete',
}

interface FilterOption {
  label: string;
  value: string;
}
interface FilterProps {
  type?: string;
  onChange: any;
  options?: Array<FilterOption>;
  value: Array<string>;
  hidden?: boolean;
}

const modifiers = [
  {
    name: 'preventOverflow',
    options: {
      mainAxis: false,
    },
  },
];

const FilterButton = ({ type, onChange, options, value, hidden }: FilterProps) => {
  const { onChange: switchClickOutsideActive, isChecked } = useSwitch({
    defaultChecked: false,
  });

  const iconClass = value.length === 0 ? styles.iconDisable : '';

  let filterComponent: JSX.Element | string = '';
  if (type === FilterType.freesearch) {
    filterComponent = <FreesearchFilter onChange={onChange} value={value.toString()} />;
  }
  if (type === FilterType.autocomplete) {
    filterComponent = <AutocompleteFilter onChange={onChange} value={value} options={options} />;
  }
  if (!filterComponent) {
    return null;
  }

  return (
    <Dialog
      modifiers={modifiers}
      onClickOutside={switchClickOutsideActive}
      position={Dialog.positions.BOTTOM}
      showTrigger={[Dialog.hideShowTriggers.CLICK]}
      hideTrigger={[Dialog.hideShowTriggers.CLICK_OUTSIDE]}
      content={<DialogContentContainer className={styles.dialogContent}>{filterComponent}</DialogContentContainer>}
    >
      <HeadButton
        icon={Filter}
        iconClass={iconClass}
        onClick={switchClickOutsideActive}
        active={value.length > 0 || isChecked}
        hidden={hidden && !isChecked}
      />
    </Dialog>
  );
};

export default FilterButton;
