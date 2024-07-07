"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentPrice = void 0;
var _utils_1 = require("./_utils");
var constants_1 = require("./constants");
var getCurrentPrice = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);

    if (currentAd) {
        return res
            .status(200)
            .json({ currentPrice: currentAd.currentPrice, status: constants_1.ApiStatuses.Ok });
    }

    return res
        .status(400)
        .json({ status: constants_1.ApiStatuses.Error, error: constants_1.Errors.AdNotFound });
};
exports.getCurrentPrice = getCurrentPrice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudFByaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvY3VycmVudFByaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUFnRDtBQUNoRCx5Q0FBa0Q7QUFFM0MsSUFBTSxlQUFlLEdBQW1CLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDdEQsSUFBTSxTQUFTLEdBQUcsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUU1QyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsT0FBTyxHQUFHO2FBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNYLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGtCQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFaVyxRQUFBLGVBQWUsbUJBWTFCIn0=