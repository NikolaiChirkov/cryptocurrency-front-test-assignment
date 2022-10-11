import { CHANGE_NOW_API_KEY } from "../../core/Constants";
import { IMinExchangeAmount } from "../../interface/IMinExchangeAmount";
import { get } from "../../core/networking/get";
import { ResponseError } from "../../types/ResponseError";

type GetMinExchangeAmountProps = {
  fromTo: string;
};

export const getMinExchangeAmount = async ({
  fromTo,
}: GetMinExchangeAmountProps): Promise<IMinExchangeAmount | ResponseError> => {
  try {
    const response = await get<IMinExchangeAmount>(
      `https://api.changenow.io/v1/min-amount/${fromTo}?api_key=${CHANGE_NOW_API_KEY}`
    );

    return response;
  } catch (e) {
    throw new Error(e);
  }
};
