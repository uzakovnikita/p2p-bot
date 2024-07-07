import { RequestHandler } from 'express';

import { Errors } from '../constants';
import { getRequestedAdFromDb } from './_utils';
import { ApiStatuses } from './constants';

export const setLimit: RequestHandler = (req, res) => {
  const { limit } = req.body;
  const currentAd = getRequestedAdFromDb(req);

  if (limit && currentAd) {
    const currentAd = getRequestedAdFromDb(req);
    currentAd.limit = limit;

    return res.status(200).json({ status: ApiStatuses.Ok, limit });
  }

  return res.status(400).json({
    error: 'Invalid value of limit or ad not found',
    status: ApiStatuses.Error,
  });
};

export const getLimit: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req);

  if (currentAd) {
    return res.status(200).json({
      limit: currentAd.limit,
      status: ApiStatuses.Ok,
    });
  }

  return res
    .status(400)
    .json({ error: Errors.AdNotFound, status: ApiStatuses.Error });
};
