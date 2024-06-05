import { state } from "../state";
import { RequestHandler } from "express";
import { ApiStatuses } from "./constants";
export const powerOn: RequestHandler = (req, res, next) => {
  state.power.on = true;

  return res.status(200).json({ power: true, status: ApiStatuses.ok });
};

export const powerOff: RequestHandler = (req, res, next) => {
  state.power.on = false;

  return res.status(200).json({ power: false, status: ApiStatuses.ok });
};

export const getPower: RequestHandler = (req, res, next) => {
  return res.status(200).json({
    power: state.power.on ? true : false,
    status: ApiStatuses.ok,
  });
};
