import classNames from "classnames";
import React from "react";
import { ReactFCWithChildren } from "../../../types/ReactFCWithChildren";
import styles from "./content-line.module.scss";

export type ContentLineProps = {
  className?: string;
};

export const ContentLine: ReactFCWithChildren<ContentLineProps> = ({
  className,
  children,
}) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};
