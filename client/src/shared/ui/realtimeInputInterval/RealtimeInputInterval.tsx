import { useEffect, useState } from 'react';

import { Button, TextField, Typography } from '@mui/material';
import styles from './RealtimeInputInterval.module.css';
import { Ads, AdsIntoOperationWaysMap, OperationWays } from '../../constants';

export const RealtimeInputInterval: React.FC<{
  getValue: () => Promise<string>;
  setServerValue: (value: string) => Promise<void | Record<string, any>>;
  label: string;
  ad: Ads;
  isLimit?: boolean;
}> = ({ getValue, setServerValue, label, ad, isLimit }) => {
  const sendPriceInterval = async (value: string) => {
    setProgress(true);

    await setServerValue(value);
    const newValue = await getValue();

    setValue(newValue);

    setProgress(false);
  };

  const [value, setValue] = useState('');
  const [isProgress, setProgress] = useState(false);
  const typeOfOperation = AdsIntoOperationWaysMap[ad];

  useEffect(() => {
    (async () => {
      const value = await getValue();
      setValue(value);
    })();
  }, [getValue, setValue]);

  return (
    <div className={styles.root}>
      <Typography
        variant="body1"
        fontWeight={500}
        className={styles.text}
        display={'block'}
      >
        {label}
      </Typography>

      <TextField
        label={
          isLimit || typeOfOperation === OperationWays.Sell
            ? 'минимальная цена'
            : 'максимальная цена'
        }
        required
        value={value}
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value ?? '');
        }}
      />
      <div className={styles.btnWrapper}>
        <Button
          variant="contained"
          onClick={() => sendPriceInterval(value)}
          disabled={isProgress}
        >
          применить
        </Button>
      </div>
    </div>
  );
};
