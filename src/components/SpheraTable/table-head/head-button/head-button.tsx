import React from 'react';

import classNames from 'classnames';

import { IconButton } from 'monday-ui-react-core';

import styles from './head-button.module.scss';

export interface HeadButtonProps {
  icon?: any;
  iconClass?: string;
  active?: boolean;
  hidden?: boolean;
  onClick?: (event: unknown) => void;
  className?: string;
}

export const HeadButton = ({ icon, iconClass, active, hidden, onClick, className }: HeadButtonProps) => (
  <IconButton
    className={classNames(
      {
        [styles.button]: true,
        [styles.iconHidden]: hidden,
      },
      className
    )}
    iconClassName={classNames(styles.icon, iconClass)}
    size={IconButton.sizes?.XS}
    icon={icon}
    active={active}
    onClick={onClick}
  />
);
