"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLimit = exports.setLimit = void 0;
var constants_1 = require("./constants");
var _utils_1 = require("./_utils");
var setLimit = function (req, res, next) {
    var limit = req.body.limit;
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (limit.max && limit.min && currentAd) {
        var currentAd_1 = (0, _utils_1.getRequestedAdFromDb)(req);
        currentAd_1.limit = limit;
        return res.status(200).json({ status: constants_1.ApiStatuses.Ok });
    }
    return res
        .status(400)
        .json({ error: "Invalid value of limit or ad not found", status: constants_1.ApiStatuses.Error });
};
exports.setLimit = setLimit;
var getLimit = function (req, res, next) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        return res.status(200).json({
            limit: currentAd.limit,
            status: constants_1.ApiStatuses.Ok,
        });
    }
    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_1.ApiStatuses.Error });
};
exports.getLimit = getLimit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGltaXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvbGltaXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUFrRDtBQUNsRCxtQ0FBZ0Q7QUFDekMsSUFBTSxRQUFRLEdBQW1CLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQzdDLElBQUEsS0FBSyxHQUFLLEdBQUcsQ0FBQyxJQUFJLE1BQWIsQ0FBYztJQUMzQixJQUFNLFNBQVMsR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3hDLElBQU0sV0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsV0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMxRixDQUFDLENBQUM7QUFYVyxRQUFBLFFBQVEsWUFXbkI7QUFFSyxJQUFNLFFBQVEsR0FBbUIsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDckQsSUFBTSxTQUFTLEdBQUcsSUFBQSw2QkFBb0IsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUU1QyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsTUFBTSxFQUFFLHVCQUFXLENBQUMsRUFBRTtTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxHQUFHO1NBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUNYLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQztBQWJXLFFBQUEsUUFBUSxZQWFuQiJ9