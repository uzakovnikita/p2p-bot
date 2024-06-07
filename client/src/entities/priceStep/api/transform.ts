import { PriceStep } from "../model";

export const transformPriceStep = ({
  priceStep,
}: Partial<PriceStep> & Record<string, any>): PriceStep => {
  return { priceStep: priceStep || "" };
};
