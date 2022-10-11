import React from "react";
import { ReactFCWithChildren } from "../../../types/ReactFCWithChildren";
import { Loader } from "../../atoms/Loader";
import styles from "./with-loader.module.scss";

export type WithLoaderProps = {
  isLoading: boolean;
};

export const WithLoader: ReactFCWithChildren<WithLoaderProps> = ({
  isLoading,
  children,
}) => {
  return (
    <div className={styles.root}>
      {isLoading && <Loader className={styles.root__loader} />}
      {children}
    </div>
  );
};
