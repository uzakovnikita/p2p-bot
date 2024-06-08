import { adminApi } from "../../../shared/api";
import { Ads } from "../../../shared/constants";
import { Limit } from "../model";
import { transformLimit } from "./transform";

export const getCurrentLimit = async ({ ad }: { ad: Ads }) => {
  return transformLimit(
    await adminApi.get<{ limit: Limit }>("/limits", { ad })
  );
};

export const setCurrentLimit = ({
  min,
  max,
  ad,
}: {
  min: Limit["min"];
  max: Limit["max"];
  ad: Ads;
}) => {
  return adminApi.post<Limit & { ad: Ads }>("/limits", { min, max, ad });
};
