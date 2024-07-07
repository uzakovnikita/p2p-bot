export enum Banks {
  Sber = 'sber',
  Tink = 'tink',
}

export enum OperationWays {
  Buy = 'buy',
  Sell = 'sell',
}

export enum Pages {
  SberBuy = 'sber_buy',
  SberSell = 'sber_sell',
  TinkBuy = 'tink_buy',
  TinkSell = 'tink_sell',
  RaifBuy = 'raif_buy',
  RaifSell = 'raif_sell',
  NotFound = 'not_found',
}

export enum Ads {
  SberBuy = 'sber_buy',
  SberSell = 'sber_sell',
  TinkBuy = 'tink_buy',
  TinkSell = 'tink_sell',
  RaifBuy = 'raif_buy',
  RaifSell = 'raif_sell',
}

export const AdsIntoOperationWaysMap = {
  [Ads.SberBuy]: OperationWays.Buy,
  [Ads.TinkBuy]: OperationWays.Buy,
  [Ads.RaifBuy]: OperationWays.Buy,
  [Ads.SberSell]: OperationWays.Sell,
  [Ads.TinkSell]: OperationWays.Sell,
  [Ads.RaifSell]: OperationWays.Sell,
};
