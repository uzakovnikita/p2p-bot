import { adminApi } from "../../../shared/api";
import { Ads } from "../../../shared/constants";
import { PriceInterval } from "../model";
import { transformPriceStep } from "./transform";

export const getCurrentPriceInterval = async ({ ad }: { ad: Ads }) => {
  return transformPriceStep(
    await adminApi.get<{ priceInterval: PriceInterval }>("/price_interval", {
      ad,
    })
  );
};

export const setCurrentPriceInterval = ({
  min,
  max,
  ad,
}: {
  min: PriceInterval["min"];
  max: PriceInterval["max"];
  ad: Ads;
}) => {
  return adminApi.post<PriceInterval & { ad: Ads }>("/price_interval", {
    min,
    max,
    ad,
  });
};
