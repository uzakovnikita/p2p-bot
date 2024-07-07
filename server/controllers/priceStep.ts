import { RequestHandler } from 'express';

import { Errors } from '../constants';
import { getRequestedAdFromDb } from './_utils';
import { ApiStatuses } from './constants';

export const setPriceStep: RequestHandler = (req, res) => {
  const { priceStep } = req.body;
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    currentAd.priceStep = priceStep;

    return res.status(200).json({ status: ApiStatuses.Ok });
  }

  return res
    .status(400)
    .json({ error: Errors.AdNotFound, status: ApiStatuses.Error });
};

export const getPriceStep: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res
      .status(200)
      .json({ priceStep: currentAd.priceStep, status: ApiStatuses.Ok });
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.Error, error: Errors.AdNotFound });
};
