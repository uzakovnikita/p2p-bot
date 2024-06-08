import { IAd } from "models";
import { adList, operationList } from "./models/constants";

export const db = {
  ads: Array(4)
    .fill(0, 0, 4)
    .map<IAd>((val, index) => {
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
        type: adList[index],
        operation: operationList[index % 2],
        id: "",
      };
    }),
};
