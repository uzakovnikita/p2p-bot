import React from "react";

import { TextField, Button, Typography } from "@mui/material";
import styles from "./RealtimeInputDisplay.module.css";
export const RealtimeInputDisplay: React.FC<{
  text: string;
  label: string;
  onSubmit?: (value: string) => Promise<void>;
  type?: string;
}> = ({ text, label, onSubmit, type }) => {
  const handleSubmit = async () => {
    setProgress(true);
    onSubmit && (await onSubmit(value));
    setProgress(false);
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
        type={type || "number"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
      <div className={styles.btnWrapper}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={isProgress}
        >
          применить
        </Button>
      </div>
    </div>
  );
};
