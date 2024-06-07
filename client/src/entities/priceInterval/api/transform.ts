import { PriceInterval } from "../model";

export const transformPriceStep = ({
  max,
  min,
}: Partial<PriceInterval> & Record<string, any>): PriceInterval => {
  return { max: max ?? '', min: min ?? '0' };
};
