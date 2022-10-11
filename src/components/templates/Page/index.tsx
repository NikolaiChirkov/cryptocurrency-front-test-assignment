import React from "react";
import { ReactFCWithChildren } from "../../../types/ReactFCWithChildren";
import styles from "./page.module.scss";

export const Page: ReactFCWithChildren = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};
