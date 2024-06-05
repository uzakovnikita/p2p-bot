import { Limit } from "../../../entities/limit/ui";
import { PriceStep } from "../../../entities/priceStep/ui";
import { Layout } from "../../../shared/ui/layout";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <Layout>
      <div className={styles.blockWrapper}>
        <Limit />
      </div>
      <div className={styles.blockWrapper}>
        <PriceStep />
      </div>
    </Layout>
  );
};
