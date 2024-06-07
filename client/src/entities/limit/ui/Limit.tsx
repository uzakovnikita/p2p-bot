import { useEffect, useState } from "react";

import { RealtimeInputDisplay } from "../../../shared/ui/realtimeInputDisplay/RealtimeInputDisplay";
import { getCurrentLimit, setCurrentLimit } from "../api";

import styles from "./Form.module.css";
export const Limit = () => {
  const sendLimit = async (limit: string) => {
    await setCurrentLimit(limit);
    const { limit: currentLimit } = await getCurrentLimit();
    setCurrentValue(currentLimit);
  };

  useEffect(() => {
    (async () => {
      const { limit: currentLimit } = await getCurrentLimit();
      setCurrentValue(currentLimit);
    })();
  }, []);

  const [currentValue, setCurrentValue] = useState("");

  return (
    <RealtimeInputDisplay
      onSubmit={sendLimit}
      label="лимиты"
      text={`Текущее значение лимита: ${currentValue}`}
    />
  );
};
