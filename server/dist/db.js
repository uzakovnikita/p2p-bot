"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var constants_1 = require("./models/constants");
exports.db = {
    ads: Array(4)
        .fill(0, 3)
        .map(function (val) {
        return {
            power: false,
            currentPrice: "",
            limit: {
                min: "",
                max: "",
            },
            priceInterval: {
                min: "",
                max: "",
            },
            priceStep: "",
            spread: "",
            type: constants_1.Ads[val],
            operation: constants_1.Operations[val % 2],
        };
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxnREFBcUQ7QUFFeEMsUUFBQSxFQUFFLEdBQUc7SUFDaEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDVixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNWLEdBQUcsQ0FBTSxVQUFDLEdBQUc7UUFDWixPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUs7WUFDWixZQUFZLEVBQUUsRUFBRTtZQUNoQixLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNELGFBQWEsRUFBRTtnQkFDYixHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxlQUFHLENBQUMsR0FBRyxDQUFDO1lBQ2QsU0FBUyxFQUFFLHNCQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUMvQixDQUFDO0lBQ0osQ0FBQyxDQUFDO0NBQ0wsQ0FBQyJ9