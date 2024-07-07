import { PriceInterval } from '../model';

export const transformPriceStep = ({
  priceInterval,
}: Partial<PriceInterval> & Record<string, any>): PriceInterval => {
  return { priceInterval: priceInterval ?? '' };
};
