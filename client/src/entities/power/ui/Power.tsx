import { observer } from "mobx-react-lite";
import { globalStore } from "../../../shared/store/global.store";
import { FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPower, powerOff, powerOn } from "../api";
import { Ads } from "../../../shared/constants";

export const Power: React.FC<{ ad: Ads }> = observer(({ ad }) => {
  const [power, setPower] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const sendPower = async () => {
    setInProgress(true);
    power ? await powerOff() : await powerOn();
    power ? globalStore.adOff(ad) : globalStore.adOn(ad);
    const { power: currentPower } = await getPower();
    setPower(currentPower);
    setInProgress(false);
  };

  useEffect(() => {
    (async () => {
      const { power: currentPower } = await getPower();
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
});
