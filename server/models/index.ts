import { Ads, Operations } from "./constants";
export { Ads };
type IntervalValue = {
  min: string;
  max: string;
};

export interface IAd {
  power: boolean;
  currentPrice: string;
  limit: IntervalValue;
  priceInterval: IntervalValue;
  priceStep: string;
  spread: string;
  type: Ads;
  operation: Operations;
}
