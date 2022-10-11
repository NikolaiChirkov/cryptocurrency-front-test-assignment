/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExchangeButton } from "./partials/ExchangeButton";
import { ICurrency } from "../../../../../interface/ICurrency";
import { ContentLine } from "../../../../molecules/ContentLine";
import { InputSelectCurrency } from "../../../../molecules/InputSelectCurrency";
import { fetchInitialExchangeData } from "../../../../../redux/exchanges/thunks/fetchInitialExchangeData";
import { RootStateType } from "../../../../../redux";
import { fetchExchangeAmount } from "../../../../../redux/exchanges";
import styles from "./currency-line.module.scss";

type CurrenciesType = {
  from: ICurrency & { amount: string };
  to: ICurrency & { amount: string };
};

const defaultCurrency: ICurrency = {
  ticker: "",
  name: "",
  image: "",
  hasExternalId: false,
  isFiat: false,
  featured: false,
  isStable: false,
  supportsFixedRate: false,
};

export const CurrencyLine = () => {
  const [isMinAmountValidated, setIsMinAmountValidated] = React.useState(true);
  const [selectorCurrencies, setSelectorCurrencies] =
    React.useState<CurrenciesType>({
      from: { ...defaultCurrency, amount: "" },
      to: { ...defaultCurrency, amount: "" },
    });
  const { currencies, exchanges } = useSelector((state: RootStateType) => ({
    currencies: state.currencies.entities,
    exchanges: state.exchanges,
  }));
  const dispatch = useDispatch();

  const toSelectValidation = exchanges.error
    ? { text: exchanges.error.error }
      ? !isMinAmountValidated
      : {
          text: `Exchange amount must be greater, than minimum exchange amount (${exchanges.minAmount})`,
        }
    : undefined;

  const swapCurrencies = () => {
    const firstCurrency = selectorCurrencies.from;
    const secondCurrency = selectorCurrencies.to;

    setSelectorCurrencies({ from: secondCurrency, to: firstCurrency });
  };

  const onFromSelectorCurrencyChange = (item: ICurrency) => {
    setIsMinAmountValidated(true);

    dispatch(
      fetchInitialExchangeData({
        currencies: { from: item, to: selectorCurrencies.to },
      }) as any
    );
  };

  const onToSelectorCurrencyChange = (item: ICurrency) => {
    setIsMinAmountValidated(true);

    dispatch(
      fetchInitialExchangeData({
        currencies: { from: selectorCurrencies.from, to: item },
      }) as any
    );
  };

  const onFirstSelectorAmountChange = (value: string) => {
    if (Number(value) >= exchanges.minAmount) {
      setIsMinAmountValidated(true);

      dispatch(
        fetchExchangeAmount({
          amount: Number(value),
          currencies: {
            from: selectorCurrencies.from,
            to: selectorCurrencies.to,
          },
        }) as any
      );
    } else {
      setIsMinAmountValidated(false);
    }

    setSelectorCurrencies({
      ...selectorCurrencies,
      from: { ...selectorCurrencies.from, amount: value },
    });
  };

  React.useEffect(() => {
    if (currencies.length && selectorCurrencies.from.name === "") {
      setSelectorCurrencies({
        from: { ...currencies[0], amount: "" },
        to: { ...currencies[1], amount: "" },
      });
      dispatch(
        fetchInitialExchangeData({
          currencies: { from: currencies[0], to: currencies[1] },
        }) as any
      );
    }
  }, [currencies]);

  React.useEffect(() => {
    if (
      exchanges.currencies.from.ticker !== selectorCurrencies.from.ticker ||
      exchanges.currencies.to.ticker !== selectorCurrencies.to.ticker ||
      selectorCurrencies.from.amount === "" ||
      selectorCurrencies.to.amount === ""
    ) {
      setSelectorCurrencies({
        from: {
          ...exchanges.currencies.from,
          amount: exchanges.minAmount.toString(),
        },
        to: {
          ...exchanges.currencies.to,
          amount: exchanges.exchangeAmount.estimatedAmount.toString(),
        },
      });
    } else {
      setSelectorCurrencies({
        ...selectorCurrencies,
        to: {
          ...selectorCurrencies.to,
          amount: exchanges.exchangeAmount.estimatedAmount.toString(),
        },
      });
    }
  }, [exchanges]);

  return (
    <ContentLine className={styles.root}>
      <InputSelectCurrency
        list={currencies}
        placeholder="Search"
        currentCurrencyValue={selectorCurrencies.from}
        value={selectorCurrencies.from.amount}
        onCurrencyChange={onFromSelectorCurrencyChange}
        onAmountChange={onFirstSelectorAmountChange}
      />
      <ExchangeButton onButtonPress={swapCurrencies} />
      <InputSelectCurrency
        list={currencies}
        placeholder="Search"
        disabled={true}
        currentCurrencyValue={selectorCurrencies.to}
        value={selectorCurrencies.to.amount}
        validation={toSelectValidation}
        onCurrencyChange={onToSelectorCurrencyChange}
      />
    </ContentLine>
  );
};
