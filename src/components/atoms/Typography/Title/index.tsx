import React from "react";
import classNames from "classnames";
import { ReactFCWithChildren } from "../../../../types/ReactFCWithChildren";
import styles from "./typography-title.module.scss";

export type TypographyTitleProps = {
  level: "1" | "2";
  className?: string;
};

export const TypographyTitle: ReactFCWithChildren<TypographyTitleProps> = ({
  level,
  children,
  className,
}) => {
  return React.createElement(
    `h${level}`,
    { className: classNames(styles.root, className) },
    children
  );
};
