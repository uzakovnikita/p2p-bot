import { state } from "../state";
import { RequestHandler } from "express";
import { ApiStatuses } from "./constants";
export const getSpread: RequestHandler = (req, res, next) => {
  return res
    .status(200)
    .json({ spred: state.priceStep.value, status: ApiStatuses.ok });
};
