import { createAsyncThunk } from "@reduxjs/toolkit";
import { getExchangeAmount } from "../../../fetchers/exchange/getExchangeAmount";
import { ICurrency } from "../../../interface/ICurrency";
import { ResponseError } from "../../../types/ResponseError";

export type FetchExchangeAmountProps = {
  currencies: { from: ICurrency; to: ICurrency };
  amount: number;
};

export const fetchExchangeAmount = createAsyncThunk(
  "exchanges/fetchExchangeAmount",
  async (props: FetchExchangeAmountProps) => {
    try {
      const response = await getExchangeAmount({
        fromTo: `${props.currencies.from.ticker}_${props.currencies.to.ticker}`,
        amount: props.amount,
      });

      if ((response as ResponseError).error) {
        return {
          exchangeAmount: {
            estimatedAmount: 0,
            transactionSpeedForecast: "",
            warningMessage: "",
          },
          currencies: props.currencies,
          error: response,
        };
      }

      return { exchangeAmount: response, currencies: props.currencies };
    } catch (e) {
      throw new Error(e);
    }
  }
);
