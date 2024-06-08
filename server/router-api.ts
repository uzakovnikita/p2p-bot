import { Router } from "express";
import {
  getLimit,
  setLimit,
  getPriceStep,
  setPriceStep,
  getPower,
  powerOff,
  powerOn,
  getSpread,
  getCurrentPrice,
  getPriceInterval,
  setPriceInterval,
  getWorkingAds,
  setCurrentPrice,
  getAdId,
  setAdId,
  getAdIds,
} from "./controllers";
import { ApiStatuses } from "./controllers/constants";
import { Errors } from "./constants";

export const routerApi = Router();

routerApi.get("/limits", getLimit);
routerApi.post("/limits", setLimit);
routerApi.get("/price_step", getPriceStep);
routerApi.post("/price_step", setPriceStep);
routerApi.get("/power", getPower);
routerApi.post("/power_on", powerOn);
routerApi.post("/power_off", powerOff);
routerApi.get("/spread", getSpread);
routerApi.get("/current_price", getCurrentPrice);
routerApi.post("/current_price", setCurrentPrice);
routerApi.get("/price_interval", getPriceInterval);
routerApi.post("/price_interval", setPriceInterval);
routerApi.get("/working_ads", getWorkingAds);
routerApi.get("/ad_id", getAdId);
routerApi.post("/ad_id", setAdId);
routerApi.get('/ad_ids', getAdIds)

routerApi.all("*", (req, res) => {
  res.status(404).json({ status: ApiStatuses.error, error: Errors.NotFound });
});
