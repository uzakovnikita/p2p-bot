import { CurrentPrice } from "../model";

export const transformCurrentPrice = ({
  currentPrice,
}: Partial<CurrentPrice> & Record<string, any>): CurrentPrice => {
  return { currentPrice: currentPrice ?? '' };
};
