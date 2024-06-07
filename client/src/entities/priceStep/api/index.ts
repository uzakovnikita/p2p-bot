import { adminApi } from "../../../shared/api";
import { Ads } from "../../../shared/constants";
import { PriceStep } from "../model";
import { transformPriceStep } from "./transform";

export const getCurrentPriceStep = async ({ ad }: { ad: Ads }) => {
  return transformPriceStep(
    await adminApi.get<PriceStep>("/price_step", { ad })
  );
};

export const setCurrentPriceStep = ({
  priceStep,
  ad,
}: {
  priceStep: string;
  ad: Ads;
}) => {
  return adminApi.post<PriceStep & { ad: Ads }>("/price_step", {
    priceStep,
    ad,
  });
};
