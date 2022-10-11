import { ExchangesState } from "./Slice";

export const initialState: ExchangesState = {
  minAmount: 0,
  currencies: {
    from: {
      ticker: "",
      name: "",
      image: "",
      hasExternalId: false,
      isFiat: false,
      featured: false,
      isStable: false,
      supportsFixedRate: false,
    },
    to: {
      ticker: "",
      name: "",
      image: "",
      hasExternalId: false,
      isFiat: false,
      featured: false,
      isStable: false,
      supportsFixedRate: false,
    },
  },
  exchangeAmount: {
    estimatedAmount: 0,
    transactionSpeedForecast: "",
    warningMessage: "",
  },
  error: null,
};
