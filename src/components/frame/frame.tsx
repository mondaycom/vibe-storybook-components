import { FC, ReactNode } from 'react';
import cx from 'classnames';
import styles from './frame.module.scss';

type FrameProps = {
  children: ReactNode;
  className: string;
  noGutter: boolean;
  noBorder: boolean;
};

const Frame: FC<FrameProps> = ({ children, className, noGutter, noBorder }) => (
  <div
    className={cx(styles.frame, className, {
      [styles.noGutter]: noGutter,
      [styles.noBorder]: noBorder,
    })}
  >
    {children}
  </div>
);

export default Frame;
