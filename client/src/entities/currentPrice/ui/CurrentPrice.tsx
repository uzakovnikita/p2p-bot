import { getCurrentPrice } from "../api";
import { Ads } from "../../../shared/constants";
import { RealtimeTextDisplay } from "../../../shared/ui/realtimeTextDisplay";
export const CurrentPrice: React.FC<{ ad: Ads }> = ({ ad }) => {
  return (
    <RealtimeTextDisplay
      ad={ad}
      getValue={async () => (await getCurrentPrice({ ad })).currentPrice}
      label="Текущая цена"
    />
  );
};
