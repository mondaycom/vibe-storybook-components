import React from "react";
import cx from "classnames";
import "./component-name.scss";

// TODO image is not displaying in Vibe's storybook - pass image as prop?
export const ComponentName = ({ children, className, withFoundationBackground = false }) => {
  return (
    <h1
      className={cx("monday-storybook-component-name", className, {
        "monday-storybook-component-name--foundation": withFoundationBackground
      })}
    >
      {children}
    </h1>
  );
};

export default ComponentName;
