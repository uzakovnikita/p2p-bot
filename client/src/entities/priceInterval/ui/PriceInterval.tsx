import { getCurrentPriceInterval, setCurrentPriceInterval } from '../api';

import { Ads } from '../../../shared/constants';
import { RealtimeInputInterval } from '../../../shared/ui/realtimeInputInterval';

export const PriceInterval: React.FC<{ ad: Ads }> = ({ ad }) => {
  return (
    <RealtimeInputInterval
      setServerValue={(value) =>
        setCurrentPriceInterval({ priceInterval: value, ad })
      }
      label="Интервал цены"
      getValue={async () =>
        (await getCurrentPriceInterval({ ad })).priceInterval
      }
      ad={ad}
    />
  );
};
