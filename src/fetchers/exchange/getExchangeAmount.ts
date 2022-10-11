import { CHANGE_NOW_API_KEY } from "../../core/Constants";
import { get } from "../../core/networking/get";
import { IExchangeAmount } from "../../interface/IExchangeAmount";
import { ResponseError } from "../../types/ResponseError";

type GetExchangeAmountProps = {
  amount: number;
  fromTo: string;
};

export const getExchangeAmount = async ({
  amount,
  fromTo,
}: GetExchangeAmountProps): Promise<IExchangeAmount | ResponseError> => {
  try {
    const response = await get<IExchangeAmount>(
      `https://api.changenow.io/v1/exchange-amount/${amount}/${fromTo}/?api_key=${CHANGE_NOW_API_KEY}`
    );

    return response;
  } catch (e) {
    throw new Error(e);
  }
};
