/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ICurrency } from "../../../../../interface/ICurrency";
import { Typography } from "../../../../atoms/Typography";
import { RenderInputAddonAfterProps } from "../../../InputSelect/Types";
import styles from "./input-select-currency-addon-after.module.scss";

export type InputSelectCurrencyAddonAfterProps =
  RenderInputAddonAfterProps<ICurrency> & {
    isSelectMode: boolean;
  };

export const InputSelectCurrencyAddonAfter: React.FC<
  InputSelectCurrencyAddonAfterProps
> = ({ selectedItem, isSelectMode }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.root__icon}
        src={selectedItem.image}
        alt={`${selectedItem.name} icon`}
      />
      <Typography.Text className={styles.root__text}>
        {selectedItem.ticker}
      </Typography.Text>
      <img
        src={isSelectMode ? "/cross.svg" : "/arrow-down.svg"}
        alt="state icon"
      />
    </div>
  );
};
