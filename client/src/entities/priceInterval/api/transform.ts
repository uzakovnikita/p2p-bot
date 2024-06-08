import { PriceInterval } from "../model";

export const transformPriceStep = ({
  priceInterval,
}: { priceInterval?: Partial<PriceInterval> } & Record<
  string,
  any
>): PriceInterval => {
  return { max: priceInterval?.max ?? "", min: priceInterval?.min ?? "" };
};
