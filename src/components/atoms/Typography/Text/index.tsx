import React from "react";
import classNames from "classnames";
import { ReactFCWithChildren } from "../../../../types/ReactFCWithChildren";
import styles from "./typography-text.module.scss";

export type TypographyTextProps = {
  className?: string;
};

export const TypographyText: ReactFCWithChildren<TypographyTextProps> = ({
  children,
  className,
}) => {
  return <p className={classNames(styles.root, className)}>{children}</p>;
};
