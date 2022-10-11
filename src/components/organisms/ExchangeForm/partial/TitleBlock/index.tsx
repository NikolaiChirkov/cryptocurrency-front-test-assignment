import React from "react";
import { Typography } from "../../../../atoms/Typography";
import styles from "./title-block.module.scss";

export const TitleBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <Typography.Title className={styles.root__title} level="1">
        Crypto Exchange
      </Typography.Title>
      <Typography.Title level="2">Exchange fast and easy</Typography.Title>
    </div>
  );
};
