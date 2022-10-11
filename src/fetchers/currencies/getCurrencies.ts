import { get } from "../../core/networking/get";
import { ICurrency } from "../../interface/ICurrency";

export const getCurrencies = async (): Promise<ICurrency[]> => {
  try {
    const response = await get<ICurrency[]>(
      "https://api.changenow.io/v1/currencies?active=true"
    );

    return response;
  } catch (e) {
    throw new Error(e);
  }
};
