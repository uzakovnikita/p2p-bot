import { adminApi } from "../../../shared/api";
import { Power } from "../model";
import { transformPower } from "./transform";

export const getPower = async () => {
  return transformPower(await adminApi.get<Power>("/power"));
};

export const powerOff = () => {
  return adminApi.post("/power_off");
};

export const powerOn = () => {
  return adminApi.post("/power_on");
};
