import { FC } from 'react';
import cx from 'classnames';
import CoreLink from '../../helpers/components/Link/Link';
import styles from './link.module.scss';
import { Size } from './LinkConstants';

type LinkProps = {
  className?: string;
  children: string;
  href: string;
  size?: Size;
  withoutSpacing?: boolean;
};

const Link: FC<LinkProps> & { sizes?: typeof Size } = ({ children, href, size = Size.MEDIUM, withoutSpacing = false, className }) => (
  <CoreLink
    text={children}
    href={href}
    className={cx(styles.compsLink, className, {
      [styles.small]: size === Size.SMALL,
      [styles.medium]: size === Size.MEDIUM,
      [styles.withSpacing]: !withoutSpacing,
    })}
  />
);

export default Link;
