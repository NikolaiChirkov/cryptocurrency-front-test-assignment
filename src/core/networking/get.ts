import { ResponseError } from "../../types/ResponseError";

export const get = async <T, P = ResponseError>(url: string): Promise<T | P> => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    return response.json();
  } catch (e) {
    throw new Error(e);
  }
};
