"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLimit = exports.setLimit = void 0;
var state_1 = require("../state");
var constants_1 = require("./constants");
var setLimit = function (req, res, next) {
    var limit = req.body.limit;
    if (!Number.isNaN(Number(limit))) {
        state_1.state.limitState.value = Number(limit);
        return res.status(200).json({ status: constants_1.ApiStatuses.ok });
    }
    return res
        .status(400)
        .json({ error: "Invalid value of limit", status: constants_1.ApiStatuses.error });
};
exports.setLimit = setLimit;
var getLimit = function (req, res, next) {
    return res
        .status(200)
        .json({ limit: state_1.state.limitState.value, status: constants_1.ApiStatuses.ok });
};
exports.getLimit = getLimit;
