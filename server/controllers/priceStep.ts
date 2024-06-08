import { RequestHandler } from "express";
import { ApiStatuses } from "./constants";
import { getRequestedAdFromDb } from "./_utils";
import { Errors } from "../constants";
export const setPriceStep: RequestHandler = (req, res) => {
  const { priceStep } = req.body;
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    currentAd.priceStep = priceStep;
    return res.status(200).json({ status: ApiStatuses.ok });
  }
  return res
    .status(400)
    .json({ error: Errors.AdNotFound, status: ApiStatuses.error });
};

export const getPriceStep: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);
  if (currentAd) {
    return res
      .status(200)
      .json({ priceStep: currentAd.priceStep, status: ApiStatuses.ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.error, error: Errors.AdNotFound });
};
