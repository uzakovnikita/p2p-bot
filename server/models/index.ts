import { Ads, Operations } from './constants';

export { Ads };

export interface IAd {
  power: boolean;
  currentPrice: string;
  limit: number;
  priceInterval: number;
  priceStep: string;
  spread: string;
  type: Ads;
  operation: Operations;
  id: string;
}
