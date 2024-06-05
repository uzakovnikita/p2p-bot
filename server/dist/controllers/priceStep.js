"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceStep = exports.setPriceStep = void 0;
var state_1 = require("../state");
var constants_1 = require("./constants");
var setPriceStep = function (req, res, next) {
    var priceStep = req.body.priceStep;
    if (!Number.isNaN(Number(priceStep))) {
        state_1.state.priceStep.value = Number(priceStep);
        return res.status(200).json({ status: constants_1.ApiStatuses.ok });
    }
    return res
        .status(400)
        .json({ error: "Invalid value of priceStep", status: constants_1.ApiStatuses.error });
};
exports.setPriceStep = setPriceStep;
var getPriceStep = function (req, res, next) {
    return res
        .status(200)
        .json({ priceStep: state_1.state.priceStep.value, status: constants_1.ApiStatuses.ok });
};
exports.getPriceStep = getPriceStep;
