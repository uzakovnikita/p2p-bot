"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceStep = exports.setPriceStep = void 0;
var constants_1 = require("../constants");
var _utils_1 = require("./_utils");
var constants_2 = require("./constants");
var setPriceStep = function (req, res) {
    var priceStep = req.body.priceStep;
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        currentAd.priceStep = priceStep;
        return res.status(200).json({ status: constants_2.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_2.ApiStatuses.Error });
};
exports.setPriceStep = setPriceStep;
var getPriceStep = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        return res
            .status(200)
            .json({ priceStep: currentAd.priceStep, status: constants_2.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ status: constants_2.ApiStatuses.Error, error: constants_1.Errors.AdNotFound });
};
exports.getPriceStep = getPriceStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VTdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvcHJpY2VTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFzQztBQUN0QyxtQ0FBZ0Q7QUFDaEQseUNBQTBDO0FBRW5DLElBQU0sWUFBWSxHQUlyQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ0gsSUFBQSxTQUFTLEdBQUssR0FBRyxDQUFDLElBQUksVUFBYixDQUFjO0lBQy9CLElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxPQUFPLEdBQUc7U0FDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBakJXLFFBQUEsWUFBWSxnQkFpQnZCO0FBRUssSUFBTSxZQUFZLEdBQW1CLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDbkQsSUFBTSxTQUFTLEdBQUcsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUU1QyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsT0FBTyxHQUFHO2FBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNYLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGtCQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFaVyxRQUFBLFlBQVksZ0JBWXZCIn0=