import { useEffect, useState } from "react";

import { RealtimeInputDisplay } from "../../../shared/ui/realtimeInputDisplay/RealtimeInputDisplay";
import { getCurrentPriceStep, setCurrentPriceStep } from "../api";
export const PriceStep = () => {
  const sendLimit = async (priceStep: string) => {
    await setCurrentPriceStep(priceStep);
    const { priceStep: priceStepCurrent } = await getCurrentPriceStep();
    setCurrentValue(priceStepCurrent);
  };

  useEffect(() => {
    (async () => {
      const { priceStep: priceStepCurrent } = await getCurrentPriceStep();
      setCurrentValue(priceStepCurrent);
    })();
  }, []);

  const [currentValue, setCurrentValue] = useState("");

  return (
    <RealtimeInputDisplay
      onSubmit={sendLimit}
      label="шаг цены"
      text={`Текущее значение шага цены: ${currentValue}`}
    />
  );
};
