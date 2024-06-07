import { adminApi } from "../../../shared/api";
import { Ads } from "../../../shared/constants";
import { CurrentPrice } from "../model";
import { transformCurrentPrice } from "./transform";

export const getCurrentPrice = async ({ ad }: { ad: Ads }) => {
  return transformCurrentPrice(
    await adminApi.get<CurrentPrice>("/price_step", { ad })
  );
};
