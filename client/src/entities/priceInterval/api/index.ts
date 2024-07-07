import { adminApi } from '../../../shared/api';
import { Ads } from '../../../shared/constants';
import { PriceInterval } from '../model';
import { transformPriceStep } from './transform';

export const getCurrentPriceInterval = async ({ ad }: { ad: Ads }) => {
  return transformPriceStep(
    await adminApi.get<PriceInterval>('/price_interval', {
      ad,
    })
  );
};

export const setCurrentPriceInterval = ({
  priceInterval,
  ad,
}: {
  priceInterval: PriceInterval['priceInterval'];
  ad: Ads;
}) => {
  return adminApi.post<PriceInterval & { ad: Ads }>('/price_interval', {
    priceInterval,
    ad,
  });
};
