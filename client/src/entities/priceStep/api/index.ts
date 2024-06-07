import { adminApi } from "../../../shared/api";
import { PriceStep } from "../model";
import { transformPriceStep } from "./transform";

export const getCurrentPriceStep = async () => {
  return transformPriceStep(await adminApi.get<PriceStep>("/price_step"));
};

export const setCurrentPriceStep = (priceStep: string) => {
  return adminApi.post<PriceStep>("/price_step", { priceStep });
};
