export enum Ads {
  SberBuy = "sber_buy",
  SberSell = "sber_sell",
  TinkBuy = "tink_buy",
  TinkSell = "tink_sell",
}

export const adList = [Ads.SberBuy, Ads.SberSell, Ads.TinkBuy, Ads.TinkSell];

export enum Operations {
  Buy = "buy",
  Sell = "sell",
}

export const operationList = [Operations.Buy, Operations.Sell];
