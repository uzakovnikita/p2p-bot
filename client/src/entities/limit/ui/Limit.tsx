import React, { useEffect, useState } from "react";

import { TextField, Button } from "@mui/material";
import { adminApi } from "../../../shared/api";
import styles from "./Form.module.css";
import { RealtimeInputDisplay } from "../../../shared/ui/realtimeInputDisplay/RealtimeInputDisplay";
import { getCurrentLimit, setCurrentLimit } from "../api";
export const Limit = () => {
  const sendLimit = async (limit: string) => {
    await setCurrentLimit(limit);
    const currentLimitValue = await getCurrentLimit();
    setCurrentValue(currentLimitValue);
  };

  useEffect(() => {
    (async () => {
      const currentLimitValue = await getCurrentLimit();
      setCurrentValue(currentLimitValue);
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
