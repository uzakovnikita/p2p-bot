import { Power } from "../model";

export const transformPower = ({
  power,
}: Partial<Power> & Record<string, any>): Power => {
  return { power: power || false };
};
