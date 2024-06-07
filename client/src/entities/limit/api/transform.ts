import { Limit } from "../model";

export const transformLimit = ({
  limit,
}: Partial<Limit> & Record<string, any>): Limit => {
  return { limit: limit ?? 0 };
};
