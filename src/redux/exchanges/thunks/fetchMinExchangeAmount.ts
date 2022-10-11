import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMinExchangeAmount } from "../../../fetchers/exchange/getMinimalExchangeAmount";
import { ICurrency } from "../../../interface/ICurrency";
import { ResponseError } from "../../../types/ResponseError";

export type fetchMinExchangeAmountProps = {
  currencies: {
    from: ICurrency;
    to: ICurrency;
  };
};

export const fetchMinExchangeAmount = createAsyncThunk(
  "exchanges/fetchMinExchangeAmount",
  async (props: fetchMinExchangeAmountProps) => {
    try {
      const response = await getMinExchangeAmount({
        fromTo: `${props.currencies.from.ticker}_${props.currencies.to.ticker}`,
      });

      if ((response as ResponseError).error) {
        return {
          minAmount: 0,
          currencies: props.currencies,
          error: response,
        };
      }

      return { ...response, currencies: props.currencies };
    } catch (e) {
      throw new Error(e);
    }
  }
);
