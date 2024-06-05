"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpread = void 0;
var state_1 = require("../state");
var constants_1 = require("./constants");
var getSpread = function (req, res, next) {
    return res
        .status(200)
        .json({ spred: state_1.state.priceStep.value, status: constants_1.ApiStatuses.ok });
};
exports.getSpread = getSpread;
