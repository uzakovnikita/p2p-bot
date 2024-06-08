import { Request } from "express";
import { db } from "../../db";
import { Ads } from "../../models/constants";

export const getAdFromDb = (ad: Ads | string) => {

  return db.ads.find((item) => {
    return item.type === ad;
  });
}
  

export const getRequestedAdFromDb = (req: Request) => {
  const {
    query: { ad: queryAd },
    body: { ad: dataAd },
  } = req;


  return getAdFromDb(queryAd || dataAd);
};

export const mapOperationByAd = (ad: Ads) => {
  switch (ad) {
    case Ads.SberBuy:
      return Ads.SberSell;
    case Ads.TinkBuy:
      return Ads.TinkSell;
    case Ads.SberSell:
      return Ads.SberBuy;
    case Ads.TinkSell:
      return Ads.TinkBuy;
  }
};