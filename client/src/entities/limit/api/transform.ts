import { Limit } from "../model";

export const transformLimit = ({
  limit,
}: { limit?: Partial<Limit> } & Record<string, any>): Limit => {
  return { min: limit?.min ?? "", max: limit?.max ?? "" };
};
