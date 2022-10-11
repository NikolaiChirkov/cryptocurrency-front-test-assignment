/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ICurrency } from "../../../../../interface/ICurrency";
import { Typography } from "../../../../atoms/Typography";
import { RenderListItemProps } from "../../../InputSelect/Types";
import styles from "./input-select-currency-list-item.module.scss";

export const InputSelectCurrencyListItem: React.FC<
  RenderListItemProps<ICurrency>
> = ({ item }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.root__icon}
        src={item.image}
        alt={`${item.name} icon`}
      />
      <Typography.Text className={styles.root__ticker}>
        {item.ticker}
      </Typography.Text>
      <Typography.Text className={styles.root__name}>
        {item.name}
      </Typography.Text>
    </div>
  );
};
