import React from 'react';
import styles from './FixedTop.module.css';

export const FixedTop: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
