import { RequestHandler } from 'express';

import { Errors } from '../constants';
import { getRequestedAdFromDb } from './_utils';
import { ApiStatuses } from './constants';

export const setPriceInterval: RequestHandler = (req, res) => {
  const { priceInterval } = req.body;
  const currentAd = getRequestedAdFromDb(req);

  if (priceInterval && currentAd) {
    const currentAd = getRequestedAdFromDb(req);
    currentAd.priceInterval = priceInterval;

    return res.status(200).json({ status: ApiStatuses.Ok, priceInterval });
  }

  return res.status(400).json({
    error: 'Invalid value of priceInterval or ad not found',
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
