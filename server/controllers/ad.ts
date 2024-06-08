import { RequestHandler } from "express";
import { getRequestedAdFromDb } from "./_utils";
import { ApiStatuses } from "./constants";
import { Errors } from "../constants";

export const getAdId: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res
      .status(200)
      .json({ id: currentAd.id, status: ApiStatuses.ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.error, error: Errors.AdNotFound });
};

export const setAdId: RequestHandler = (req, res) => {
  const { id } = req.body;
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd && id) {
    currentAd.id = id;

    return res
      .status(200)
      .json({ id: currentAd.id, status: ApiStatuses.ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.error, error: Errors.AdNotFound });
};
