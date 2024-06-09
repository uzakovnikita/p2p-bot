import { RequestHandler } from "express";
import { ApiStatuses } from "./constants";
import { getRequestedAdFromDb } from "./_utils";
import { Errors } from "../constants";
export const setPriceInterval: RequestHandler = (req, res) => {
  const { max, min } = req.body;
  const currentAd = getRequestedAdFromDb(req);

  if (max && min && currentAd) {
    const currentAd = getRequestedAdFromDb(req);
    currentAd.priceInterval = { max, min };
    return res.status(200).json({ status: ApiStatuses.Ok, max, min });
  }

  return res.status(400).json({
    error: "Invalid value of priceInterval or ad not found",
    status: ApiStatuses.Error,
  });
};

export const getPriceInterval: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res.status(200).json({
      priceInterval: currentAd.priceInterval,
      status: ApiStatuses.Ok,
    });
  }

  return res
    .status(400)
    .json({ error: Errors.AdNotFound, status: ApiStatuses.Error });
};
