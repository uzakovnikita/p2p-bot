import { RequestHandler } from 'express';

import { Errors } from '../constants';
import { db } from '../db';
import { getRequestedAdFromDb } from './_utils';
import { ApiStatuses } from './constants';

export const powerOn: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    currentAd.power = true;

    return res.status(200).json({ status: ApiStatuses.Ok });
  }

  return res
    .status(400)
    .json({ error: Errors.AdNotFound, status: ApiStatuses.Error });
};

export const powerOff: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    currentAd.power = false;

    return res.status(200).json({ status: ApiStatuses.Ok });
  }

  return res
    .status(400)
    .json({ error: Errors.AdNotFound, status: ApiStatuses.Error });
};

export const getPower: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res.status(200).json({
      power: currentAd.power,
      status: ApiStatuses.Ok,
    });
  }

  return res
    .status(400)
    .json({ error: Errors.AdNotFound, status: ApiStatuses.Error });
};

export const getWorkingAds: RequestHandler = (_, res) => {
  return res.status(200).json({
    ads: db.ads.filter((ad) => ad.power).map((ad) => ad.type),
    ids: db.ads.filter((ad) => ad.power).map((ad) => ad.id),
    status: ApiStatuses.Ok,
  });
};
