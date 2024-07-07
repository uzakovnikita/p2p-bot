import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

import { NavTabs, FixedTop } from './elements';

export const Layout: React.FC<{ TopInformation: React.FC }> = ({
  TopInformation,
}) => {
  return (
    <div className={styles.root}>
      <FixedTop>
        <TopInformation />
      </FixedTop>
      <Outlet />
      <nav className={styles.nav}>
        <NavTabs />
      </nav>
    </div>
  );
};
