"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceInterval = exports.setPriceInterval = void 0;
var constants_1 = require("../constants");
var _utils_1 = require("./_utils");
var constants_2 = require("./constants");
var setPriceInterval = function (req, res) {
    var priceInterval = req.body.priceInterval;
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (priceInterval && currentAd) {
        var currentAd_1 = (0, _utils_1.getRequestedAdFromDb)(req);
        currentAd_1.priceInterval = priceInterval;
        return res.status(200).json({ status: constants_2.ApiStatuses.Ok, priceInterval: priceInterval });
    }
    return res.status(400).json({
        error: 'Invalid value of priceInterval or ad not found',
        status: constants_2.ApiStatuses.Error,
    });
};
exports.setPriceInterval = setPriceInterval;
var getPriceInterval = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        return res.status(200).json({
            priceInterval: currentAd.priceInterval,
            status: constants_2.ApiStatuses.Ok,
        });
    }
    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_2.ApiStatuses.Error });
};
exports.getPriceInterval = getPriceInterval;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VJbnRlcnZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL3ByaWNlSW50ZXJ2YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsMENBQXNDO0FBQ3RDLG1DQUFnRDtBQUNoRCx5Q0FBMEM7QUFFbkMsSUFBTSxnQkFBZ0IsR0FBbUIsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUMvQyxJQUFBLGFBQWEsR0FBSyxHQUFHLENBQUMsSUFBSSxjQUFiLENBQWM7SUFDbkMsSUFBTSxTQUFTLEdBQUcsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUU1QyxJQUFJLGFBQWEsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFNLFdBQVMsR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLFdBQVMsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBRXhDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFCLEtBQUssRUFBRSxnREFBZ0Q7UUFDdkQsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSztLQUMxQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFmVyxRQUFBLGdCQUFnQixvQkFlM0I7QUFFSyxJQUFNLGdCQUFnQixHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3ZELElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsYUFBYSxFQUFFLFNBQVMsQ0FBQyxhQUFhO1lBQ3RDLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFiVyxRQUFBLGdCQUFnQixvQkFhM0IifQ==