"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLimit = exports.setLimit = void 0;
var data_1 = require("../data");
var setLimit = function (req, res, next) {
    var limit = req.body.limit;
    console.log(req.body);
    if (!Number.isNaN(Number(limit))) {
        data_1.limitState.value = Number(limit);
        return res.status(200).json({ status: "ok" });
    }
    return res.status(400).json({ error: "Invalid value of limit" });
};
exports.setLimit = setLimit;
var getLimit = function (req, res, next) {
    return res.status(200).json({ limit: data_1.limitState.value });
};
exports.getLimit = getLimit;
