import { RequestHandler } from 'express';

import { Errors } from '../constants';
import { getRequestedAdFromDb } from './_utils';
import { ApiStatuses } from './constants';

export const getCurrentPrice: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res
      .status(200)
      .json({ currentPrice: currentAd.currentPrice, status: ApiStatuses.Ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.Error, error: Errors.AdNotFound });
};

export const setCurrentPrice: RequestHandler = (req, res) => {
  const { currentPrice } = req.body;
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd && currentPrice) {
    currentAd.currentPrice = currentPrice;

    return res
      .status(200)
      .json({ currentPrice: currentAd.currentPrice, status: ApiStatuses.Ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.Error, error: Errors.AdNotFound });
};
