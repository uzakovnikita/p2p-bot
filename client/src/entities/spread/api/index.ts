import { adminApi } from "../../../shared/api";
import { Ads } from "../../../shared/constants";
import { Spread } from "../model";
import {  transformSpread } from "./transform";

export const getCurrentSpread = async ({ ad }: { ad: Ads }) => {
  return transformSpread(
    await adminApi.get<Spread>("/spread", { ad })
  );
};
