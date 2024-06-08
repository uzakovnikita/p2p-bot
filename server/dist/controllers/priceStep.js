"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceStep = exports.setPriceStep = void 0;
var constants_1 = require("./constants");
var _utils_1 = require("./_utils");
var setPriceStep = function (req, res) {
    var priceStep = req.body.priceStep;
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        currentAd.priceStep = priceStep;
        return res.status(200).json({ status: constants_1.ApiStatuses.ok });
    }
    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_1.ApiStatuses.error });
};
exports.setPriceStep = setPriceStep;
var getPriceStep = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        return res
            .status(200)
            .json({ priceStep: currentAd.priceStep, status: constants_1.ApiStatuses.ok });
    }
    return res
        .status(400)
        .json({ status: constants_1.ApiStatuses.error, error: constants_1.Errors.AdNotFound });
};
exports.getPriceStep = getPriceStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VTdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvcHJpY2VTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUFrRDtBQUNsRCxtQ0FBZ0Q7QUFDekMsSUFBTSxZQUFZLEdBQW1CLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDM0MsSUFBQSxTQUFTLEdBQUssR0FBRyxDQUFDLElBQUksVUFBYixDQUFjO0lBQy9CLElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxPQUFPLEdBQUc7U0FDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBWFcsUUFBQSxZQUFZLGdCQVd2QjtBQUVLLElBQU0sWUFBWSxHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ25ELElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRzthQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxPQUFPLEdBQUc7U0FDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBWFcsUUFBQSxZQUFZLGdCQVd2QiJ9