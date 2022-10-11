import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { ICurrency } from "../../interface/ICurrency";
import { IExchangeAmount } from "../../interface/IExchangeAmount";
import { IMinExchangeAmount } from "../../interface/IMinExchangeAmount";
import { ResponseError } from "../../types/ResponseError";
import { initialState } from "./InitialState";
import { fetchExchangeAmount, fetchMinExchangeAmount } from "./thunks";
import { fetchInitialExchangeData } from "./thunks/fetchInitialExchangeData";

export type ExchangesState = IMinExchangeAmount & {
  exchangeAmount: IExchangeAmount;
  currencies: {
    from: ICurrency;
    to: ICurrency;
  };
  error: ResponseError | null;
};

export const exchangesSlice = createSlice<
  ExchangesState,
  SliceCaseReducers<ExchangesState>
>({
  name: "exchanges",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExchangeAmount.fulfilled, (state, action) => {
      return { ...state, ...(action.payload as any) };
    });
    builder.addCase(fetchMinExchangeAmount.fulfilled, (state, action) => {
      return { ...state, ...(action.payload as any) };
    });
    builder.addCase(fetchInitialExchangeData.fulfilled, (state, action) => {
      return action.payload as any;
    });
  },
});

export const { actions, reducer } = exchangesSlice;
