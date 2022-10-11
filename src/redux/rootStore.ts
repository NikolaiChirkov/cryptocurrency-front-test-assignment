import { configureStore } from "@reduxjs/toolkit";
import { CurrenciesState, reducer as currenciesReducer } from "./currencies";
import { ExchangesState, reducer as exchangesReducer } from "./exchanges";

export type RootStateType = {
  currencies: CurrenciesState;
  exchanges: ExchangesState;
};

const store = configureStore({
  reducer: { currencies: currenciesReducer, exchanges: exchangesReducer },
});

export default store;
