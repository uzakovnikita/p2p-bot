"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
var express_1 = require("express");
var controllers_1 = require("./controllers");
exports.routerApi = (0, express_1.Router)();
exports.routerApi.get("/limits", controllers_1.getLimit);
exports.routerApi.post("/limits", controllers_1.setLimit);
exports.routerApi.get("/price_step", controllers_1.getPriceStep);
exports.routerApi.post("/price_step", controllers_1.setPriceStep);
exports.routerApi.get("/power", controllers_1.getPower);
exports.routerApi.post("/power_on", controllers_1.powerOn);
exports.routerApi.post("/power_off", controllers_1.powerOff);
exports.routerApi.get("/spread", controllers_1.getSpread);
exports.routerApi.get("/current_price", controllers_1.getCurrentPrice);
exports.routerApi.get("/price_interval", controllers_1.getPriceInterval);
exports.routerApi.post("/price_interval", controllers_1.setPriceInterval);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3JvdXRlci1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWlDO0FBQ2pDLDZDQVl1QjtBQUVWLFFBQUEsU0FBUyxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRWxDLGlCQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxzQkFBUSxDQUFDLENBQUM7QUFDbkMsaUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHNCQUFRLENBQUMsQ0FBQztBQUNwQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsMEJBQVksQ0FBQyxDQUFDO0FBQzNDLGlCQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSwwQkFBWSxDQUFDLENBQUM7QUFDNUMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHNCQUFRLENBQUMsQ0FBQztBQUNsQyxpQkFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUscUJBQU8sQ0FBQyxDQUFDO0FBQ3JDLGlCQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxzQkFBUSxDQUFDLENBQUM7QUFDdkMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLHVCQUFTLENBQUMsQ0FBQztBQUNwQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSw2QkFBZSxDQUFDLENBQUM7QUFDakQsaUJBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsOEJBQWdCLENBQUMsQ0FBQztBQUNuRCxpQkFBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSw4QkFBZ0IsQ0FBQyxDQUFDIn0=