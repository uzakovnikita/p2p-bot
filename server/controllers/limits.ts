import { RequestHandler } from "express";
import { ApiStatuses } from "./constants";
import { getRequestedAdFromDb } from "./_utils";
import { Errors } from "../constants";
export const setLimit: RequestHandler = (req, res, next) => {
  const { max, min } = req.body;
  const currentAd = getRequestedAdFromDb(req);
  if (max && min && currentAd) {
    const currentAd = getRequestedAdFromDb(req);
    currentAd.limit = { max, min };
    return res.status(200).json({ status: ApiStatuses.ok, max, min });
  }
  return res.status(400).json({
    error: "Invalid value of limit or ad not found",
    status: ApiStatuses.error,
  });
};

export const getLimit: RequestHandler = (req, res, next) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res.status(200).json({
      limit: currentAd.limit,
      status: ApiStatuses.ok,
    });
  }

  return res
    .status(400)
    .json({ error: Errors.AdNotFound, status: ApiStatuses.error });
};
