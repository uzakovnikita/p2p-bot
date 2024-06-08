import { useEffect, useState } from "react";

import { RealtimeInputDisplay } from "../../../shared/ui/realtimeInputDisplay/RealtimeInputDisplay";
import { getCurrentPriceStep, setCurrentPriceStep } from "../api";
import { Ads } from "../../../shared/constants";
export const PriceStep: React.FC<{ ad: Ads }> = ({ ad }) => {
  const sendPriceStep = async (priceStep: string) => {
    await setCurrentPriceStep({ priceStep, ad });
    const { priceStep: priceStepCurrent } = await getCurrentPriceStep({ ad });
    setCurrentValue(priceStepCurrent);
  };

  useEffect(() => {
    (async () => {
      const { priceStep: priceStepCurrent } = await getCurrentPriceStep({ ad });
      setCurrentValue(priceStepCurrent);
    })();
  }, [ad]);

  const [currentValue, setCurrentValue] = useState("");

  return (
    <RealtimeInputDisplay
      onSubmit={sendPriceStep}
      label="шаг цены"
      text={`Текущее значение шага цены: ${currentValue}`}
    />
  );
};
