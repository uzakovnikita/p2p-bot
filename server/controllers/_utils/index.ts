import { Request } from 'express';

import { db } from '../../db';
import { Ads } from '../../models/constants';

export const getAdFromDb = (ad: Ads | string) => {
  return db.ads.find((item) => {
    return item.type === ad;
  });
};

export const getAdById = (id: string) => {
  return db.ads.find((item) => {
    return item.id === id;
  });
};

export const getRequestedAdFromDb = (req: Request) => {
  const {
    query: { ad: queryAd, id: queryId },
    body: { ad: dataAd, id: dataId },
  } = req;

  if (queryId || dataId) {
    return getAdById((queryId || dataId) as string);
  }

  return getAdFromDb(queryAd || dataAd);
};

export const mapOperationByAd = (ad: Ads) => {
  switch (ad) {
    case Ads.SberBuy:
      return Ads.SberSell;
    case Ads.TinkBuy:
      return Ads.TinkSell;
    case Ads.RaifBuy:
      return Ads.RaifBuy;
  }
};
