import { adminApi } from "../../../shared/api";
import { PriceStep } from "../model";

export const getCurrentPriceStep = async () => {
  return (await adminApi.get<PriceStep>("/price_step")).priceStep;
};

export const setCurrentPriceStep = (priceStep: string) => {
  return adminApi.post<PriceStep>("/price_step", { priceStep });
};
