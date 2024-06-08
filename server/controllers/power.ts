import { RequestHandler } from "express";
import { ApiStatuses } from "./constants";
import { getRequestedAdFromDb } from "./_utils";
import { db } from "../db";
import { Errors } from "../constants";
export const powerOn: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    currentAd.power = true;
    return res.status(200).json({ status: ApiStatuses.ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.error, error: Errors.AdNotFound });
};

export const powerOff: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    currentAd.power = false;
    return res.status(200).json({ status: ApiStatuses.ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.error, error: Errors.AdNotFound });
};

export const getPower: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res.status(200).json({
      power: currentAd.power,
      status: ApiStatuses.ok,
    });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.error, error: Errors.AdNotFound });
};

export const getWorkingAds: RequestHandler = (_, res) => {
  return res.status(200).json({
    ads: db.ads.filter((ad) => ad.power).map((ad) => ad.type),
    ids:  db.ads.filter((ad) => ad.power).map((ad) => ad.id),
    status: ApiStatuses.ok,
  });
};
