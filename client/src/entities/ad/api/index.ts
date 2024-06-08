import { adminApi } from "../../../shared/api";
import { Ads } from "../model";
import { transformAds } from "./transform";

export const getWorkingAds = async () => {
  return transformAds(await adminApi.get<Ads>("/working_ads"));
};
