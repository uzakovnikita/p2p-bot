import { adminApi } from "../../../shared/api";
import { Ads } from "../../../shared/constants";
import { Id } from "../model";
import { transformAds, transformAdId } from "./transform";

export const getWorkingAds = async () => {
  return transformAds(await adminApi.get<Ads>("/working_ads"));
};

export const setAdId = async ({ ad, id }: { ad: Ads; id: string }) => {
  return await adminApi.post("/ad_id", { id, ad });
};
export const getAdId = async ({ ad }: { ad: Ads }) => {
  return transformAdId(await adminApi.get<Id>("/ad_id", { ad }));
};
