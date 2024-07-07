import { getCurrentSpread } from '../api';
import { Ads } from '../../../shared/constants';

import { RealtimeTextDisplay } from '../../../shared/ui/realtimeTextDisplay';

export const Spread: React.FC<{
  ad: Exclude<Ads, Ads.SberSell | Ads.TinkSell | Ads.RaifSell>;
}> = ({ ad }) => {
  const nameMap = {
    [Ads.SberBuy]: 'спред на сбере',
    [Ads.TinkBuy]: 'спред на тиньке',
    [Ads.RaifBuy]: 'спред на райфазен',
  };

  return (
    <RealtimeTextDisplay
      getValue={async () => (await getCurrentSpread({ ad })).spread}
      label={nameMap[ad]}
      ad={ad}
    />
  );
};
