import { limitState } from "../data";
import {RequestHandler} from "express";
export const setLimit: RequestHandler = (req, res, next) => {

    const {limit} = req.body;
    console.log(req.body)

    if (!Number.isNaN(Number(limit))) {
        limitState.value = Number(limit);
        return res.status(200).json({status: "ok"});
    }
    return res.status(400).json({error: "Invalid value of limit"});
}

export const getLimit: RequestHandler = (req, res, next) => {
    return res.status(200).json({limit: limitState.value});
}