import { adminApi } from "../../../shared/api";
import { Power } from "../model";

export const getPower = async () => {
  return (await adminApi.get<Power>("/power")).power;
};

export const powerOff = () => {
  return adminApi.post("/power_off");
};

export const powerOn = () => {
  return adminApi.post("/power_on");
};
