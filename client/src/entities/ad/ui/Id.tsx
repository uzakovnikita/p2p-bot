import { useEffect, useState } from "react";
import { RealtimeInputDisplay } from "../../../shared/ui/realtimeInputDisplay";
import { setAdId, getAdId } from "../api";
import { Ads } from "../../../shared/constants";

export const Id: React.FC<{ ad: Ads }> = ({ ad }) => {
  const sendAdId = async (id: string) => {
    await setAdId({ id, ad });
    const setedId = await getAdId({ ad });
    setCurrentValue(setedId);
  };

  useEffect(() => {
    (async () => {
      const id = await getAdId({ ad });
      setCurrentValue(id);
    })();
  }, [ad]);

  const [currentValue, setCurrentValue] = useState("");
  return (
    <RealtimeInputDisplay
      label="ad_id"
      text={`id объявления: ${currentValue}`}
      onSubmit={sendAdId}
      type="text"
    />
  );
};
