import { getCurrentPriceInterval, setCurrentPriceInterval } from "../api";

import { Ads } from "../../../shared/constants";
import { RealtimeInputInterval } from "../../../shared/ui/realtimeInputInterval";

export const PriceInterval: React.FC<{ ad: Ads }> = ({ ad }) => {
  return (
    <RealtimeInputInterval
      setValue={(value) => setCurrentPriceInterval({ ...value, ad })}
      label="Интервал цены"
      getValue={async () => await getCurrentPriceInterval({ ad })}
    />
  );
};
