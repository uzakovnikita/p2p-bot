import { getCurrentSpread } from "../api";
import { Ads } from "../../../shared/constants";

import { RealtimeTextDisplay } from "../../../shared/ui/realtimeTextDisplay";

export const Spread: React.FC<{ ad: Ads }> = ({ ad }) => {
  return (
    <RealtimeTextDisplay
      getValue={async () => (await getCurrentSpread({ ad })).spread}
      label="Текущий спред"
      ad={ad}
    />
  );
};
