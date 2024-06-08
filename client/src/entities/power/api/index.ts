import { adminApi } from "../../../shared/api";
import { Ads } from "../../../shared/constants";
import { Power } from "../model";
import { transformPower } from "./transform";

export const getPower = async ({ ad }: { ad: Ads }) => {
  return transformPower(await adminApi.get<Power>("/power", { ad }));
};

export const powerOff = ({ ad }: { ad: Ads }) => {
  return adminApi.post("/power_off", { ad });
};

export const powerOn = ({ ad }: { ad: Ads }) => {
  return adminApi.post("/power_on", { ad });
};
