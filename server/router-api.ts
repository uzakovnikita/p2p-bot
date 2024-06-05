import { Router } from "express";
import { getLimit, setLimit, getPriceStep, setPriceStep } from "./controllers";
export const routerApi = Router();

routerApi.get("/limits", getLimit);
routerApi.post("/limits", setLimit);
routerApi.get("/price_step", getPriceStep);
routerApi.post("/price_step", setPriceStep);
