import { getCurrentLimit, setCurrentLimit } from '../api';
import { RealtimeInputInterval } from '../../../shared/ui/realtimeInputInterval';
import { Ads } from '../../../shared/constants';

export const Limit: React.FC<{ ad: Ads }> = ({ ad }) => {
  return (
    <RealtimeInputInterval
      label="лимит"
      setServerValue={(value) => setCurrentLimit({ limit: value, ad })}
      getValue={async () => (await getCurrentLimit({ ad })).limit}
      ad={ad}
      isLimit
    />
  );
};
