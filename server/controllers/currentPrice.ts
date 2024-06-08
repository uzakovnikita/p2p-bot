import { RequestHandler } from "express";
import { getRequestedAdFromDb } from "./_utils";
import { ApiStatuses } from "./constants";
import { Errors } from "../constants";

export const getCurrentPrice: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res
      .status(200)
      .json({ currentPrice: currentAd.currentPrice, status: ApiStatuses.ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.error, error: Errors.AdNotFound });
};
