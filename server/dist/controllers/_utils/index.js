"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOperationByAd = exports.getRequestedAdFromDb = exports.getAdById = exports.getAdFromDb = void 0;
var db_1 = require("../../db");
var constants_1 = require("../../models/constants");
var getAdFromDb = function (ad) {
    return db_1.db.ads.find(function (item) {
        return item.type === ad;
    });
};
exports.getAdFromDb = getAdFromDb;
var getAdById = function (id) {
    return db_1.db.ads.find(function (item) {
        return item.id === id;
    });
};
exports.getAdById = getAdById;
var getRequestedAdFromDb = function (req) {
    var _a = req.query, queryAd = _a.ad, queryId = _a.id, _b = req.body, dataAd = _b.ad, dataId = _b.id;
    if (queryId || dataId) {
        return (0, exports.getAdById)((queryId || dataId));
    }
    return (0, exports.getAdFromDb)(queryAd || dataAd);
};
exports.getRequestedAdFromDb = getRequestedAdFromDb;
var mapOperationByAd = function (ad) {
    switch (ad) {
        case constants_1.Ads.SberBuy:
            return constants_1.Ads.SberSell;
        case constants_1.Ads.TinkBuy:
            return constants_1.Ads.TinkSell;
        case constants_1.Ads.RaifBuy:
            return constants_1.Ads.RaifBuy;
    }
};
exports.mapOperationByAd = mapOperationByAd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb250cm9sbGVycy9fdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsK0JBQThCO0FBQzlCLG9EQUE2QztBQUV0QyxJQUFNLFdBQVcsR0FBRyxVQUFDLEVBQWdCO0lBQzFDLE9BQU8sT0FBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFKVyxRQUFBLFdBQVcsZUFJdEI7QUFFSyxJQUFNLFNBQVMsR0FBRyxVQUFDLEVBQVU7SUFDbEMsT0FBTyxPQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUpXLFFBQUEsU0FBUyxhQUlwQjtBQUVLLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxHQUFZO0lBRTdDLElBQUEsS0FFRSxHQUFHLE1BRjhCLEVBQXRCLE9BQU8sUUFBQSxFQUFNLE9BQU8sUUFBQSxFQUNqQyxLQUNFLEdBQUcsS0FEMkIsRUFBcEIsTUFBTSxRQUFBLEVBQU0sTUFBTSxRQUFFLENBQzFCO0lBRVIsSUFBSSxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFBLGlCQUFTLEVBQUMsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsT0FBTyxJQUFBLG1CQUFXLEVBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQVhXLFFBQUEsb0JBQW9CLHdCQVcvQjtBQUVLLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxFQUFPO0lBQ3RDLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFDWCxLQUFLLGVBQUcsQ0FBQyxPQUFPO1lBQ2QsT0FBTyxlQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3RCLEtBQUssZUFBRyxDQUFDLE9BQU87WUFDZCxPQUFPLGVBQUcsQ0FBQyxRQUFRLENBQUM7UUFDdEIsS0FBSyxlQUFHLENBQUMsT0FBTztZQUNkLE9BQU8sZUFBRyxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBVFcsUUFBQSxnQkFBZ0Isb0JBUzNCIn0=