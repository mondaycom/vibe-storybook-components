import { FC } from 'react';
import cx from 'classnames';
import { BEMClass } from '../../helpers/utils/bem-helper';
import CoreLink from '../../helpers/components/Link/Link';
import './link.scss';
import { Size } from './LinkConstants';

const BASE_CLASS = 'vibe-sb-comps-link';
const bemHelper = BEMClass(BASE_CLASS);

type LinkProps = {
  className: string;
  children: string;
  href: string;
  size?: Size;
  withoutSpacing?: boolean;
};

const Link: FC<LinkProps> = ({ children, href, size = Size.MEDIUM, withoutSpacing = false, className }) => (
  <CoreLink
    text={children}
    href={href}
    className={cx(BASE_CLASS, className, {
      [bemHelper({ state: 'small' })]: size === Size.SMALL,
      [bemHelper({ state: 'medium' })]: size === Size.MEDIUM,
      [bemHelper({ state: 'with-spacing' })]: !withoutSpacing,
    })}
  />
);

export default Link;
