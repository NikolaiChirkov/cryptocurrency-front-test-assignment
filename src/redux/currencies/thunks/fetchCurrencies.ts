import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrencies } from "../../../fetchers/currencies/getCurrencies";

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchCurrencies",
  async () => {
    try {
      const response = await getCurrencies();

      return response;
    } catch (e) {
      throw new Error(e);
    }
  }
);
