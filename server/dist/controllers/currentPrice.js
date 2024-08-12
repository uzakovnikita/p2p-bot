"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentPrice = exports.getCurrentPrice = void 0;
var constants_1 = require("../constants");
var _utils_1 = require("./_utils");
var constants_2 = require("./constants");
var getCurrentPrice = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        return res
            .status(200)
            .json({ currentPrice: currentAd.currentPrice, status: constants_2.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ status: constants_2.ApiStatuses.Error, error: constants_1.Errors.AdNotFound });
};
exports.getCurrentPrice = getCurrentPrice;
var setCurrentPrice = function (req, res) {
    var currentPrice = req.body.currentPrice;
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd && currentPrice) {
        currentAd.currentPrice = currentPrice;
        return res
            .status(200)
            .json({ currentPrice: currentAd.currentPrice, status: constants_2.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ status: constants_2.ApiStatuses.Error, error: constants_1.Errors.AdNotFound });
};
exports.setCurrentPrice = setCurrentPrice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudFByaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvY3VycmVudFByaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFzQztBQUN0QyxtQ0FBZ0Q7QUFDaEQseUNBQTBDO0FBRW5DLElBQU0sZUFBZSxHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3RELElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRzthQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxPQUFPLEdBQUc7U0FDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBWlcsUUFBQSxlQUFlLG1CQVkxQjtBQUVLLElBQU0sZUFBZSxHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQzlDLElBQUEsWUFBWSxHQUFLLEdBQUcsQ0FBQyxJQUFJLGFBQWIsQ0FBYztJQUNsQyxJQUFNLFNBQVMsR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTVDLElBQUksU0FBUyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRXRDLE9BQU8sR0FBRzthQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxPQUFPLEdBQUc7U0FDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBZlcsUUFBQSxlQUFlLG1CQWUxQiJ9