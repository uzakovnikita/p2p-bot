"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
var express_1 = require("express");
var constants_1 = require("./constants");
var controllers_1 = require("./controllers");
var constants_2 = require("./controllers/constants");
exports.routerApi = (0, express_1.Router)();
exports.routerApi.get('/limits', controllers_1.getLimit);
exports.routerApi.post('/limits', controllers_1.setLimit);
exports.routerApi.get('/price_step', controllers_1.getPriceStep);
exports.routerApi.post('/price_step', controllers_1.setPriceStep);
exports.routerApi.get('/power', controllers_1.getPower);
exports.routerApi.post('/power_on', controllers_1.powerOn);
exports.routerApi.post('/power_off', controllers_1.powerOff);
exports.routerApi.get('/spread', controllers_1.getSpread);
exports.routerApi.get('/current_price', controllers_1.getCurrentPrice);
exports.routerApi.post('/current_price', controllers_1.setCurrentPrice);
exports.routerApi.get('/price_interval', controllers_1.getPriceInterval);
exports.routerApi.post('/price_interval', controllers_1.setPriceInterval);
exports.routerApi.get('/working_ads', controllers_1.getWorkingAds);
exports.routerApi.get('/ad_id', controllers_1.getAdId);
exports.routerApi.post('/ad_id', controllers_1.setAdId);
exports.routerApi.get('/ad_ids', controllers_1.getAdIds);
exports.routerApi.get('/ad_by_id', controllers_1.getAdById);
exports.routerApi.get('/all_ads', controllers_1.getAllAds);
exports.routerApi.all('*', function (req, res) {
    res.status(404).json({ status: constants_2.ApiStatuses.Error, error: constants_1.Errors.NotFound });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3JvdXRlci1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWlDO0FBRWpDLHlDQUFxQztBQUNyQyw2Q0FtQnVCO0FBQ3ZCLHFEQUFzRDtBQUV6QyxRQUFBLFNBQVMsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUVsQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsc0JBQVEsQ0FBQyxDQUFDO0FBQ25DLGlCQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxzQkFBUSxDQUFDLENBQUM7QUFDcEMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLDBCQUFZLENBQUMsQ0FBQztBQUMzQyxpQkFBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsMEJBQVksQ0FBQyxDQUFDO0FBQzVDLGlCQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxzQkFBUSxDQUFDLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLHFCQUFPLENBQUMsQ0FBQztBQUNyQyxpQkFBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsc0JBQVEsQ0FBQyxDQUFDO0FBQ3ZDLGlCQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSx1QkFBUyxDQUFDLENBQUM7QUFDcEMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsNkJBQWUsQ0FBQyxDQUFDO0FBQ2pELGlCQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLDZCQUFlLENBQUMsQ0FBQztBQUNsRCxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSw4QkFBZ0IsQ0FBQyxDQUFDO0FBQ25ELGlCQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLDhCQUFnQixDQUFDLENBQUM7QUFDcEQsaUJBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLDJCQUFhLENBQUMsQ0FBQztBQUM3QyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUscUJBQU8sQ0FBQyxDQUFDO0FBQ2pDLGlCQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxxQkFBTyxDQUFDLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLHNCQUFRLENBQUMsQ0FBQztBQUNuQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsdUJBQVMsQ0FBQyxDQUFDO0FBQ3RDLGlCQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx1QkFBUyxDQUFDLENBQUM7QUFFckMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGtCQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM5RSxDQUFDLENBQUMsQ0FBQyJ9