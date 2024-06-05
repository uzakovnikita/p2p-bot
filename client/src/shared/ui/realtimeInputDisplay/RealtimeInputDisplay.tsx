import React from "react";

import { TextField, Button, Typography } from "@mui/material";
import styles from "./RealtimeInputDisplay.module.css";
export const RealtimeInputDisplay: React.FC<{
  text: string;
  label: string;
  onSubmit: (value: string) => Promise<void>;
}> = ({ text, label, onSubmit }) => {
  const sendLimit = async () => {
    setProgress(true);
    try {
      await onSubmit(value);
    } catch (err) {
      console.log(err);
    } finally {
      setProgress(false);
    }
  };

  const [value, setValue] = React.useState("");
  const [isProgress, setProgress] = React.useState(false);
  return (
    <div className={styles.root}>
      <Typography
        variant="body1"
        fontWeight={500}
        className={styles.text}
        display={"block"}
      >
        {text}
      </Typography>

      <TextField
        name={label}
        label={label}
        required
        value={value}
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
      <div className={styles.btnWrapper}>
        <Button variant="contained" onClick={sendLimit} disabled={isProgress}>
          применить
        </Button>
      </div>
    </div>
  );
};
