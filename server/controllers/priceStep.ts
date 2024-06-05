import { state } from "../state";
import { RequestHandler } from "express";
import { ApiStatuses } from "./constants";
export const setPriceStep: RequestHandler = (req, res, next) => {
  const { priceStep } = req.body;

  if (!Number.isNaN(Number(priceStep))) {
    state.priceStep.value = Number(priceStep);
    return res.status(200).json({ status: ApiStatuses.ok });
  }
  return res
    .status(400)
    .json({ error: "Invalid value of priceStep", status: ApiStatuses.error });
};

export const getPriceStep: RequestHandler = (req, res, next) => {
  return res
    .status(200)
    .json({ priceStep: state.priceStep.value, status: ApiStatuses.ok });
};
