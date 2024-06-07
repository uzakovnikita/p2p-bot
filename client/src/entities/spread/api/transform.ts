import { Spread } from "../model";

export const transformSpread = ({
  spread,
}: Partial<Spread> & Record<string, any>): Spread => {
  return { spread: spread ?? "" };
};
