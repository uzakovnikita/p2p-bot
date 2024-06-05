import { adminApi } from "../../../shared/api";
import { Limit } from "../model";

export const getCurrentLimit = async () => {
  return (await adminApi.get<Limit>("/limits")).limit;
};

export const setCurrentLimit = (limit: string) => {
  return adminApi.post("/limits", { limit });
};
