import { adminApi } from '../../../shared/api';
import { Ads } from '../../../shared/constants';
import { Limit } from '../model';
import { transformLimit } from './transform';

export const getCurrentLimit = async ({ ad }: { ad: Ads }) => {
  return transformLimit(await adminApi.get<Limit>('/limits', { ad }));
};

export const setCurrentLimit = ({
  limit,
  ad,
}: {
  limit: Limit['limit'];
  ad: Ads;
}) => {
  return adminApi.post<Limit & { ad: Ads }>('/limits', { limit, ad });
};
