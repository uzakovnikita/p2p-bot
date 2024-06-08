import { RequestHandler } from "express";
import { Operations } from "../models/constants";
import { getAdFromDb, getRequestedAdFromDb, mapOperationByAd } from "./_utils";
import { ApiStatuses } from "./constants";
import { Errors } from "../constants";

export const getSpread: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    const invertedAd = getAdFromDb(mapOperationByAd(currentAd.type));
    const sellAd =
      currentAd.operation === Operations.Sell ? currentAd : invertedAd;
    const buyAd =
      currentAd.operation === Operations.Buy ? currentAd : invertedAd;
    const spread = Number(sellAd.currentPrice) - Number(buyAd.currentPrice);

    return res.status(200).json({ spread, status: ApiStatuses.ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.error, error: Errors.AdNotFound });
};
