"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkingAds = exports.getPower = exports.powerOff = exports.powerOn = void 0;
var constants_1 = require("../constants");
var db_1 = require("../db");
var _utils_1 = require("./_utils");
var constants_2 = require("./constants");
var powerOn = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        currentAd.power = true;
        return res.status(200).json({ status: constants_2.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_2.ApiStatuses.Error });
};
exports.powerOn = powerOn;
var powerOff = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        currentAd.power = false;
        return res.status(200).json({ status: constants_2.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_2.ApiStatuses.Error });
};
exports.powerOff = powerOff;
var getPower = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        return res.status(200).json({
            power: currentAd.power,
            status: constants_2.ApiStatuses.Ok,
        });
    }
    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_2.ApiStatuses.Error });
};
exports.getPower = getPower;
var getWorkingAds = function (_, res) {
    return res.status(200).json({
        ads: db_1.db.ads.filter(function (ad) { return ad.power; }).map(function (ad) { return ad.type; }),
        ids: db_1.db.ads.filter(function (ad) { return ad.power; }).map(function (ad) { return ad.id; }),
        status: constants_2.ApiStatuses.Ok,
    });
};
exports.getWorkingAds = getWorkingAds;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG93ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy9wb3dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwwQ0FBc0M7QUFDdEMsNEJBQTJCO0FBQzNCLG1DQUFnRDtBQUNoRCx5Q0FBMEM7QUFFbkMsSUFBTSxPQUFPLEdBQW1CLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDOUMsSUFBTSxTQUFTLEdBQUcsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUU1QyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFdkIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFaVyxRQUFBLE9BQU8sV0FZbEI7QUFFSyxJQUFNLFFBQVEsR0FBbUIsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUMvQyxJQUFNLFNBQVMsR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTVDLElBQUksU0FBUyxFQUFFLENBQUM7UUFDZCxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUV4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsT0FBTyxHQUFHO1NBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUNYLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQztBQVpXLFFBQUEsUUFBUSxZQVluQjtBQUVLLElBQU0sUUFBUSxHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQy9DLElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1lBQ3RCLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFiVyxRQUFBLFFBQVEsWUFhbkI7QUFFSyxJQUFNLGFBQWEsR0FBbUIsVUFBQyxDQUFDLEVBQUUsR0FBRztJQUNsRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFCLEdBQUcsRUFBRSxPQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxLQUFLLEVBQVIsQ0FBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLElBQUksRUFBUCxDQUFPLENBQUM7UUFDekQsR0FBRyxFQUFFLE9BQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLEtBQUssRUFBUixDQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsRUFBRSxFQUFMLENBQUssQ0FBQztRQUN2RCxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFO0tBQ3ZCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQU5XLFFBQUEsYUFBYSxpQkFNeEIifQ==