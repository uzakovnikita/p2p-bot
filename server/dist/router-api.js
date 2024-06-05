"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
var express_1 = require("express");
var limits_1 = require("./controllers/limits");
exports.routerApi = (0, express_1.Router)();
exports.routerApi.get("/limits", limits_1.getLimit);
exports.routerApi.post("/limits", limits_1.setLimit);
