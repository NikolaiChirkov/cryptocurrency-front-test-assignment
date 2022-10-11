import { createAsyncThunk } from "@reduxjs/toolkit";
import { getExchangeAmount } from "../../../fetchers/exchange/getExchangeAmount";
import { getMinExchangeAmount } from "../../../fetchers/exchange/getMinimalExchangeAmount";
import { ICurrency } from "../../../interface/ICurrency";
import { IMinExchangeAmount } from "../../../interface/IMinExchangeAmount";
import { ResponseError } from "../../../types/ResponseError";

export type FetchInitialExchangeDataProps = {
  currencies: {
    from: ICurrency;
    to: ICurrency;
  };
};

export const fetchInitialExchangeData = createAsyncThunk(
  "exchanges/fetchInitialExchangeAmount",
  async (props: FetchInitialExchangeDataProps) => {
    try {
      const fromTo = `${props.currencies.from.ticker}_${props.currencies.to.ticker}`;

      const minExchangeResponse = await getMinExchangeAmount({ fromTo });

      if ((minExchangeResponse as ResponseError).error) {
        return {
          minAmount: 0,
          exchangeAmount: {
            estimatedAmount: 0,
            transactionSpeedForecast: "",
            warningMessage: "",
          },
          currencies: props.currencies,
          error: minExchangeResponse,
        };
      }

      const exchangeAmountResponse = await getExchangeAmount({
        fromTo,
        amount: (minExchangeResponse as IMinExchangeAmount).minAmount,
      });

      if ((exchangeAmountResponse as ResponseError).error) {
        return {
          minAmount: 0,
          exchangeAmount: {
            estimatedAmount: 0,
            transactionSpeedForecast: "",
            warningMessage: "",
          },
          currencies: props.currencies,
          error: exchangeAmountResponse,
        };
      }

      return {
        ...minExchangeResponse,
        exchangeAmount: exchangeAmountResponse,
        currencies: props.currencies,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
);
