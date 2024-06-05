"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPower = exports.powerOff = exports.powerOn = void 0;
var state_1 = require("../state");
var constants_1 = require("./constants");
var powerOn = function (req, res, next) {
    state_1.state.power.on = true;
    return res.status(200).json({ power: true, status: constants_1.ApiStatuses.ok });
};
exports.powerOn = powerOn;
var powerOff = function (req, res, next) {
    state_1.state.power.on = false;
    return res.status(200).json({ power: false, status: constants_1.ApiStatuses.ok });
};
exports.powerOff = powerOff;
var getPower = function (req, res, next) {
    return res.status(200).json({
        power: state_1.state.power.on ? true : false,
        status: constants_1.ApiStatuses.ok,
    });
};
exports.getPower = getPower;
