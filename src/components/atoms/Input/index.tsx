import classNames from "classnames";
import React from "react";
import styles from "./input.module.scss";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
};

export const Input: React.FC<InputProps> = ({
  addonBefore,
  addonAfter,
  className,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      {addonBefore && addonBefore}
      <input className={styles.root__input} {...otherProps} />
      {addonAfter && addonAfter}
    </div>
  );
};
