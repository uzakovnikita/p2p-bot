import { Limit } from "../model";

export const transformLimit = ({
  min,
  max,
}: Partial<Limit> & Record<string, any>): Limit => {
  return { min: min ?? "", max: max ?? "" };
};
