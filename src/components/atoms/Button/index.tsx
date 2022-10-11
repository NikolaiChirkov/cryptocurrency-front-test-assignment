import classNames from "classnames";
import React from "react";
import { ReactFCWithChildren } from "../../../types/ReactFCWithChildren";
import styles from "./button.module.scss";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  preset: "primary" | "transparent";
};

export const Button: ReactFCWithChildren<ButtonProps> = ({
  preset,
  className,
  children,
  ...otherProps
}) => {
  return (
    <button className={classNames(styles[preset], className)} {...otherProps}>
      {children}
    </button>
  );
};
