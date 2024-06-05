import { FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { getPower, powerOff, powerOn } from "../api";
export const Power = () => {
  const [power, setPower] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const sendPower = async () => {
    try {
      setInProgress(true);
      power ? await powerOff() : await powerOn();
      setPower(!power);
    } catch (e) {
      console.error(e);
    } finally {
      setInProgress(false);
    }
  };

  useEffect(() => {
    (async () => {
      const currentPower = await getPower();
      setPower(currentPower);
    })();
  }, []);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={power}
          onChange={sendPower}
          disabled={inProgress}
          value={power}
        />
      }
      label="ON/OFF"
    />
  );
};
