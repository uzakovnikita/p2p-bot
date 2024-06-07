import { adminApi } from "../../../shared/api";
import { Limit } from "../model";
import { transformLimit } from "./transform";

export const getCurrentLimit = async () => {
  return transformLimit(await adminApi.get<Limit>("/limits"));
};

export const setCurrentLimit = (limit: string) => {
  return adminApi.post("/limits", { limit });
};
