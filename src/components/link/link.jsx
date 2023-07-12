import cx from "classnames";
import PropTypes from "prop-types";
// import CoreLink from "../../../components/Link/Link";
import { BEMClass } from "../../helpers/bem-helper";
import "./link.scss";

const BASE_CLASS = "monday-storybook-link";
const bemHelper = BEMClass(BASE_CLASS);

// TODO not working for some reason
export const Link = ({ children, href, size, withoutSpacing, className }) => {
  return (
    <a
      href={href}
      className={cx(BASE_CLASS, className, {
        [bemHelper({ state: "small" })]: size === Link.sizes.SMALL,
        [bemHelper({ state: "medium" })]: size === Link.sizes.MEDIUM,
        [bemHelper({ state: "with-spacing" })]: !withoutSpacing
      })}
    >
      {children}
    </a>
  );
};

// export const Link = ({ children, href, size, withoutSpacing, className }) => (
//   <CoreLink
//     text={children}
//     href={href}
//     componentClassName={cx(BASE_CLASS, className, {
//       [bemHelper({ state: "small" })]: size === Link.sizes.SMALL,
//       [bemHelper({ state: "medium" })]: size === Link.sizes.MEDIUM,
//       [bemHelper({ state: "with-spacing" })]: !withoutSpacing
//     })}
//   />
// );

Link.sizes = {
  SMALL: "small",
  MEDIUM: "medium"
};

Link.defaultProps = {
  children: undefined,
  href: undefined,
  size: Link.sizes.MEDIUM,
  withoutSpacing: false
};

Link.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf([Link.sizes.SMALL, Link.sizes.MEDIUM]),
  withoutSpacing: PropTypes.bool
};

export default Link;
