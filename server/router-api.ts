import { Router } from "express";
import {
  getLimit,
  setLimit,
  getPriceStep,
  setPriceStep,
  getPower,
  powerOff,
  powerOn,
} from "./controllers";

export const routerApi = Router();

routerApi.get("/limits", getLimit);
routerApi.post("/limits", setLimit);
routerApi.get("/price_step", getPriceStep);
routerApi.post("/price_step", setPriceStep);
routerApi.get("/power", getPower);
routerApi.post("/power_on", powerOn);
routerApi.post("/power_off", powerOff);
