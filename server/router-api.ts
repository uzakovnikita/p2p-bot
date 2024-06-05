import { Router } from "express";
import { getLimit, setLimit } from "./controllers/limits";
export const routerApi = Router();

routerApi.get("/limits", getLimit);
routerApi.post("/limits", setLimit);
