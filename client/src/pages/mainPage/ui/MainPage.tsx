import { Limit } from "../../../entities/limit";
import { PriceStep } from "../../../entities/priceStep";
import { Power } from "../../../entities/power";
import { Layout } from "../../../shared/ui/layout";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <Layout>
      <div className={styles.blockWrapper}>
        <Power />
      </div>
      <div className={styles.blockWrapper}>
        <Limit />
      </div>
      <div className={styles.blockWrapper}>
        <PriceStep />
      </div>
    </Layout>
  );
};
