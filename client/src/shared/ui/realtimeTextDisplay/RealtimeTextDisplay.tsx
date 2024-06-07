import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Typography } from "@mui/material";

import { Ads } from "../../constants";
import { globalStore } from "../../store/global.store";

const INTERVAL_BETWEEN_REQUESTS = 1000;

export const RealtimeTextDisplay: React.FC<{
  getValue: () => Promise<string | number>;
  label: string;
  ad: Ads;
}> = observer(({ getValue, ad, label }) => {
  useEffect(() => {
    (async () => {
      const value = await getValue();
      setCurrentValue(String(value));
    })();

    const interval = setInterval(async () => {
      if (globalStore.getWorkingAds.includes(ad)) {
        const currentValue = await getValue();
        setCurrentValue(String(currentValue));
      }
    }, INTERVAL_BETWEEN_REQUESTS);

    return () => {
      clearInterval(interval);
    };
  }, [ad, getValue]);

  const [currentValue, setCurrentValue] = useState("");

  return (
    <Typography variant="body1" fontWeight={500} display={"block"}>
      {label}: {currentValue}
    </Typography>
  );
});
