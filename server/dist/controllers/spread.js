"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpread = void 0;
var constants_1 = require("../constants");
var constants_2 = require("../models/constants");
var _utils_1 = require("./_utils");
var constants_3 = require("./constants");
var getSpread = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        var invertedAd = (0, _utils_1.getAdFromDb)((0, _utils_1.mapOperationByAd)(currentAd.type));
        var sellAd = currentAd.operation === constants_2.Operations.Sell ? currentAd : invertedAd;
        var buyAd = currentAd.operation === constants_2.Operations.Buy ? currentAd : invertedAd;
        var spread = (Number(sellAd.currentPrice) / Number(buyAd.currentPrice)) * 100 - 102;
        return res.status(200).json({
            spread: spread,
            status: constants_3.ApiStatuses.Ok,
        });
    }
    return res
        .status(400)
        .json({ status: constants_3.ApiStatuses.Error, error: constants_1.Errors.AdNotFound });
};
exports.getSpread = getSpread;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvc3ByZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFzQztBQUN0QyxpREFBaUQ7QUFDakQsbUNBQStFO0FBQy9FLHlDQUEwQztBQUVuQyxJQUFNLFNBQVMsR0FBbUIsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUNoRCxJQUFNLFNBQVMsR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTVDLElBQUksU0FBUyxFQUFFLENBQUM7UUFDZCxJQUFNLFVBQVUsR0FBRyxJQUFBLG9CQUFXLEVBQUMsSUFBQSx5QkFBZ0IsRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFNLE1BQU0sR0FDVixTQUFTLENBQUMsU0FBUyxLQUFLLHNCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuRSxJQUFNLEtBQUssR0FDVCxTQUFTLENBQUMsU0FBUyxLQUFLLHNCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNsRSxJQUFNLE1BQU0sR0FDVixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFekUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixNQUFNLFFBQUE7WUFDTixNQUFNLEVBQUUsdUJBQVcsQ0FBQyxFQUFFO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLEdBQUc7U0FDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBckJXLFFBQUEsU0FBUyxhQXFCcEIifQ==