import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { ICurrency } from "../../interface/ICurrency";
import { fetchCurrencies } from "./thunks";

export type CurrenciesState = {
  entities: ICurrency[];
};

export const currenciesSlice = createSlice<
  CurrenciesState,
  SliceCaseReducers<CurrenciesState>
>({
  name: "currencies",
  initialState: { entities: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      return { entities: action.payload };
    });
  },
});

export const { actions, reducer } = currenciesSlice;
