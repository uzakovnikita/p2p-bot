import { Limit } from "../../../entities/limit";
import { PriceStep } from "../../../entities/priceStep";
import { Power } from "../../../entities/power";
import { Ads } from "../../../shared/constants";

import styles from "./Ad.module.css";
import { PriceInterval } from "../../../entities/priceInterval";
import { Spread } from "../../../entities/spread";
import { CurrentPrice } from "../../../entities/currentPrice";
type Props = {
  ad: Ads;
};

export const Ad: React.FC<Props> = ({ ad }) => {
  return (
    <>
      <div className={styles.blockWrapper}>
        <Power ad={ad} />
      </div>
      <div className={styles.blockWrapper}>
        <Limit />
      </div>
      <div className={styles.blockWrapper}>
        <PriceStep />
      </div>
      <div className={styles.blockWrapper}>
        <PriceInterval />
      </div>
      <div className={styles.blockWrapper}>
        <Spread ad={ad} />
      </div>
      <div className={styles.blockWrapper}>
        <CurrentPrice ad={ad} />
      </div>
    </>
  );
};
