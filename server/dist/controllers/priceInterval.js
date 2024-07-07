"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceInterval = exports.setPriceInterval = void 0;
var constants_1 = require("./constants");
var _utils_1 = require("./_utils");
var setPriceInterval = function (req, res) {
    var priceInterval = req.body.priceInterval;
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);

    if (priceInterval.max && priceInterval.min && currentAd) {
        var currentAd_1 = (0, _utils_1.getRequestedAdFromDb)(req);
        currentAd_1.priceInterval = priceInterval;

        return res.status(200).json({ status: constants_1.ApiStatuses.Ok });
    }

    return res
        .status(400)
        .json({
        error: "Invalid value of priceInterval or ad not found",
        status: constants_1.ApiStatuses.Error,
    });
};
exports.setPriceInterval = setPriceInterval;
var getPriceInterval = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);

    if (currentAd) {
        return res.status(200).json({
            limit: currentAd.priceInterval,
            status: constants_1.ApiStatuses.Ok,
        });
    }

    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_1.ApiStatuses.Error });
};
exports.getPriceInterval = getPriceInterval;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VJbnRlcnZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL3ByaWNlSW50ZXJ2YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUNBQWtEO0FBQ2xELG1DQUFnRDtBQUN6QyxJQUFNLGdCQUFnQixHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQy9DLElBQUEsYUFBYSxHQUFLLEdBQUcsQ0FBQyxJQUFJLGNBQWIsQ0FBYztJQUNuQyxJQUFNLFNBQVMsR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTVDLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3hELElBQU0sV0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsV0FBUyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDeEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUM7UUFDSixLQUFLLEVBQUUsZ0RBQWdEO1FBQ3ZELE1BQU0sRUFBRSx1QkFBVyxDQUFDLEtBQUs7S0FDMUIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBaEJXLFFBQUEsZ0JBQWdCLG9CQWdCM0I7QUFFSyxJQUFNLGdCQUFnQixHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3ZELElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxhQUFhO1lBQzlCLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFiVyxRQUFBLGdCQUFnQixvQkFhM0IifQ==