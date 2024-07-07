"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOperationByAd = exports.getRequestedAdFromDb = exports.getAdFromDb = void 0;
var db_1 = require("../../db");
var constants_1 = require("../../models/constants");
var getAdFromDb = function (ad) {
    return db_1.db.ads.find(function (el) { return el.type === ad; });
};
exports.getAdFromDb = getAdFromDb;
var getRequestedAdFromDb = function (req) {
    var queryAd = req.params.ad, dataAd = req.body.ab;
    debugger;

    return (0, exports.getAdFromDb)(queryAd || dataAd);
};
exports.getRequestedAdFromDb = getRequestedAdFromDb;
var mapOperationByAd = function (ad) {
    switch (ad) {
        case constants_1.Ads.SberBuy:
            return constants_1.Ads.SberSell;
        case constants_1.Ads.TinkBuy:
            return constants_1.Ads.TinkSell;
        case constants_1.Ads.SberSell:
            return constants_1.Ads.SberBuy;
        case constants_1.Ads.TinkSell:
            return constants_1.Ads.TinkBuy;
    }
};
exports.mapOperationByAd = mapOperationByAd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb250cm9sbGVycy9fdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsK0JBQThCO0FBQzlCLG9EQUE2QztBQUV0QyxJQUFNLFdBQVcsR0FBRSxVQUFDLEVBQWdCO0lBQ3pDLE9BQUEsT0FBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUM7QUFBbkMsQ0FBbUMsQ0FBQztBQUR6QixRQUFBLFdBQVcsZUFDYztBQUUvQixJQUFNLG9CQUFvQixHQUFHLFVBQUMsR0FBWTtJQUVuQyxJQUFJLE9BQU8sR0FFbkIsR0FBRyxVQUZnQixFQUNULE1BQU0sR0FDaEIsR0FBRyxRQURhLENBQ1o7SUFFUixRQUFRLENBQUE7SUFFUixPQUFPLElBQUEsbUJBQVcsRUFBQyxPQUFPLElBQUksTUFBTSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBVFcsUUFBQSxvQkFBb0Isd0JBUy9CO0FBRUssSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEVBQU87SUFDdEMsUUFBUSxFQUFFLEVBQUUsQ0FBQztRQUNYLEtBQUssZUFBRyxDQUFDLE9BQU87WUFDZCxPQUFPLGVBQUcsQ0FBQyxRQUFRLENBQUM7UUFDdEIsS0FBSyxlQUFHLENBQUMsT0FBTztZQUNkLE9BQU8sZUFBRyxDQUFDLFFBQVEsQ0FBQztRQUN0QixLQUFLLGVBQUcsQ0FBQyxRQUFRO1lBQ2YsT0FBTyxlQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEtBQUssZUFBRyxDQUFDLFFBQVE7WUFDZixPQUFPLGVBQUcsQ0FBQyxPQUFPLENBQUM7SUFDdkIsQ0FBQztBQUNILENBQUMsQ0FBQztBQVhXLFFBQUEsZ0JBQWdCLG9CQVczQiJ9