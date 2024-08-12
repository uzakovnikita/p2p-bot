"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLimit = exports.setLimit = void 0;
var constants_1 = require("../constants");
var _utils_1 = require("./_utils");
var constants_2 = require("./constants");
var setLimit = function (req, res) {
    var limit = req.body.limit;
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (limit && currentAd) {
        var currentAd_1 = (0, _utils_1.getRequestedAdFromDb)(req);
        currentAd_1.limit = limit;
        return res.status(200).json({ status: constants_2.ApiStatuses.Ok, limit: limit });
    }
    return res.status(400).json({
        error: 'Invalid value of limit or ad not found',
        status: constants_2.ApiStatuses.Error,
    });
};
exports.setLimit = setLimit;
var getLimit = function (req, res) {
    var currentAd = (0, _utils_1.getRequestedAdFromDb)(req);
    if (currentAd) {
        return res.status(200).json({
            limit: currentAd.limit,
            status: constants_2.ApiStatuses.Ok,
        });
    }
    return res
        .status(400)
        .json({ error: constants_1.Errors.AdNotFound, status: constants_2.ApiStatuses.Error });
};
exports.getLimit = getLimit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGltaXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvbGltaXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFzQztBQUN0QyxtQ0FBZ0Q7QUFDaEQseUNBQTBDO0FBRW5DLElBQU0sUUFBUSxHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3ZDLElBQUEsS0FBSyxHQUFLLEdBQUcsQ0FBQyxJQUFJLE1BQWIsQ0FBYztJQUMzQixJQUFNLFNBQVMsR0FBRyxJQUFBLDZCQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTVDLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3ZCLElBQU0sV0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsV0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUIsS0FBSyxFQUFFLHdDQUF3QztRQUMvQyxNQUFNLEVBQUUsdUJBQVcsQ0FBQyxLQUFLO0tBQzFCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQWZXLFFBQUEsUUFBUSxZQWVuQjtBQUVLLElBQU0sUUFBUSxHQUFtQixVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQy9DLElBQU0sU0FBUyxHQUFHLElBQUEsNkJBQW9CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1lBQ3RCLE1BQU0sRUFBRSx1QkFBVyxDQUFDLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sR0FBRztTQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLHVCQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFiVyxRQUFBLFFBQVEsWUFhbkIifQ==