import { state } from "../state";
import { RequestHandler } from "express";
import { ApiStatuses } from "./constants";
export const setLimit: RequestHandler = (req, res, next) => {
  const { limit } = req.body;

  if (!Number.isNaN(Number(limit))) {
    state.limitState.value = Number(limit);
    return res.status(200).json({ status: ApiStatuses.ok });
  }
  return res
    .status(400)
    .json({ error: "Invalid value of limit", status: ApiStatuses.error });
};

export const getLimit: RequestHandler = (req, res, next) => {
  return res
    .status(200)
    .json({ limit: state.limitState.value, status: ApiStatuses.ok });
};
