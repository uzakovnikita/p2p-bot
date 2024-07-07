import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

import { NavTabs } from "./elements";

export const Layout: React.FC = () => {
  return (
    <div className={styles.root}>
      <Outlet />
      <nav className={styles.nav}>
        <NavTabs />
      </nav>
    </div>
  );
};
