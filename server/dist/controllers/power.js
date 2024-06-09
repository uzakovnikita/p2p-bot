"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPower = exports.powerOff = exports.powerOn = void 0;
var constants_1 = require("./constants");
var _utils_1 = require("./_utils");
var powerOn = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        currentAd.power = true;
        return res.status(200).json({ status: constants_1.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ status: constants_1.ApiStatuses.Error, error: constants_1.Errors.AdNotFound });
};
exports.powerOn = powerOn;
var powerOff = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        currentAd.power = false;
        return res.status(200).json({ status: constants_1.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ status: constants_1.ApiStatuses.Error, error: constants_1.Errors.AdNotFound });
};
exports.powerOff = powerOff;
var getPower = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        return res.status(200).json({
            power: currentAd.power,
            status: constants_1.ApiStatuses.Ok,
        });
    }
    return res
        .status(400)
        .json({ status: constants_1.ApiStatuses.Error, error: constants_1.Errors.AdNotFound });
};
exports.getPower = getPower;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG93ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy9wb3dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5Q0FBa0Q7QUFDbEQsbUNBQWdEO0FBQ3pDLElBQU0sT0FBTyxHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQzlDLElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxPQUFPLEdBQUc7U0FDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBWFcsUUFBQSxPQUFPLFdBV2xCO0FBRUssSUFBTSxRQUFRLEdBQW1CLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUU1QyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGtCQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFYVyxRQUFBLFFBQVEsWUFXbkI7QUFFSyxJQUFNLFFBQVEsR0FBbUIsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUMvQyxJQUFNLFNBQVMsR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTVDLElBQUksU0FBUyxFQUFFLENBQUM7UUFDZCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztZQUN0QixNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEdBQUc7U0FDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBYlcsUUFBQSxRQUFRLFlBYW5CIn0=