import React from "react";
import { useDispatch } from "react-redux";
import { Typography } from "../../atoms/Typography";
import { TitleBlock } from "./partial/TitleBlock";
import { CurrencyLine } from "./partial/CurrencyLine";
import { SubmitLine } from "./partial/SubmitLine";
import styles from "./exchange-form.module.scss";
import { actions } from "../../../redux/currencies";
import { fetchCurrencies } from "../../../redux/currencies/thunks";

export const ExchangeForm: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <section className={styles.root}>
      <TitleBlock />
      <CurrencyLine />
      <Typography.Text className={styles.root__label}>
        Your Ethereum address
      </Typography.Text>
      <SubmitLine />
    </section>
  );
};
