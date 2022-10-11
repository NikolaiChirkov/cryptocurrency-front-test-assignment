/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import React from "react";
import styles from "./loader.module.scss";

export type LoaderProps = {
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <img
        className={styles.root__icon}
        src={"/loading.svg"}
        alt="loader icon"
      />
    </div>
  );
};
