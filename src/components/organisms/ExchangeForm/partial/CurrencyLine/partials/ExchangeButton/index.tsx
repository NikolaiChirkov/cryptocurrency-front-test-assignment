/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Button } from "../../../../../../atoms/Button";
import styles from "./exchange-button.module.scss";

export type ExchangeButtonProps = {
  onButtonPress: () => void;
};

export const ExchangeButton: React.FC<ExchangeButtonProps> = ({
  onButtonPress,
}) => {
  return (
    <Button
      className={styles.root}
      preset="transparent"
      onClick={onButtonPress}
    >
      <img className={styles.root__img} src={"/swap.svg"} alt="exchange svg" />
    </Button>
  );
};
