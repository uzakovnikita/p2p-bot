import { useEffect, useState } from "react";

import { Button, TextField, Typography } from "@mui/material";
import styles from "./RealtimeInputInterval.module.css";
export const RealtimeInputInterval: React.FC<{
  getValue: () => Promise<{ min: string; max: string }>;
  setValue: (value: {
    min: string;
    max: string;
  }) => Promise<void | Record<string, any>>;
  label: string;
}> = ({ getValue, setValue, label }) => {
  const sendPriceInterval = async (min: string, max: string) => {
    setProgress(true);

    await setValue({ min, max });
    const { max: currentMax, min: currentMin } = await getValue();

    setMaxValue(currentMax);
    setMinValue(currentMin);

    setProgress(false);
  };

  useEffect(() => {
    (async () => {
      const { max, min } = await getValue();
      setMaxValue(max);
      setMinValue(min);
    })();
  }, [getValue]);

  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [isProgress, setProgress] = useState(false);

  return (
    <div className={styles.root}>
      <Typography
        variant="body1"
        fontWeight={500}
        className={styles.text}
        display={"block"}
      >
        {label}
      </Typography>

      <TextField
        name={"Минимальная цена"}
        label={"minValue"}
        required
        value={minValue}
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setMinValue(event.target.value ?? "");
        }}
      />
      <TextField
        name={"Максимальная цена"}
        label={"maxValue"}
        required
        value={maxValue}
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setMaxValue(event.target.value ?? "");
        }}
      />
      <div className={styles.btnWrapper}>
        <Button
          variant="contained"
          onClick={() => sendPriceInterval(minValue, maxValue)}
          disabled={isProgress}
        >
          применить
        </Button>
      </div>
    </div>
  );
};
