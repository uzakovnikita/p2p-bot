import { Limit } from "../../../entities/limit";
import { PriceStep } from "../../../entities/priceStep";
import { Power } from "../../../entities/power";
import { Banks, OperationWays } from "../../../shared/constants";

import styles from "./BankWay.module.css";
type Props = {
  bank: Banks;
  operationWay: OperationWays;
};

export const BankWay: React.FC<Props> = ({ bank, operationWay }) => {
  return (
    <>
      <div className={styles.blockWrapper}>
        <Power />
      </div>
      <div className={styles.blockWrapper}>
        <Limit />
      </div>
      <div className={styles.blockWrapper}>
        <PriceStep />
      </div>
    </>
  );
};
