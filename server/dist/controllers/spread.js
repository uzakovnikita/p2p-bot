"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpread = void 0;
var constants_1 = require("../models/constants");
var _utils_1 = require("./_utils");
var constants_2 = require("./constants");
var getSpread = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        var invertedAd = (0, _utils_1.getAdFromDb)((0, _utils_1.mapOperationByAd)(currentAd.type));
        var sellAd = currentAd.operation === constants_1.Operations.Sell ? currentAd : invertedAd;
        var buyAd = currentAd.operation === constants_1.Operations.Buy ? currentAd : invertedAd;
        var spread = Number(sellAd.currentPrice) - Number(buyAd.currentPrice);
        return res.status(200).json({ spread: spread, status: constants_2.ApiStatuses.ok });
    }
    return res
        .status(400)
        .json({ status: constants_2.ApiStatuses.error, error: constants_2.Errors.AdNotFound });
};
exports.getSpread = getSpread;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvc3ByZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlEQUFpRDtBQUNqRCxtQ0FBK0U7QUFDL0UseUNBQWtEO0FBRTNDLElBQU0sU0FBUyxHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ2hELElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLElBQU0sVUFBVSxHQUFHLElBQUEsb0JBQVcsRUFBQyxJQUFBLHlCQUFnQixFQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQU0sTUFBTSxHQUNWLFNBQVMsQ0FBQyxTQUFTLEtBQUssc0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ25FLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEtBQUssc0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzlFLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV4RSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsT0FBTyxHQUFHO1NBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsa0JBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQztBQWhCVyxRQUFBLFNBQVMsYUFnQnBCIn0=