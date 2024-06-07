import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Pages } from "../../../constants";
import { Link, matchPath, useLocation } from "react-router-dom";
function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component={Link}
      to={props.href}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

export function NavTabs() {
  const { pathname } = useLocation();

  const routerLists = [
    `/${Pages.SberBuy}`,
    `/${Pages.SberSell}`,
    `/${Pages.TinkBuy}`,
    `/${Pages.TinkSell}`,
  ];

  const currentTab = routerLists.indexOf(pathname);

  return (
    <Box sx={{ width: "100%", zIndex: 10, opacity: 1, bgcolor: "background.paper" }}>
      <Tabs
        value={currentTab}
        aria-label="nav tabs example"
        role="navigation"
        variant="scrollable"
        allowScrollButtonsMobile
      >
        <LinkTab label="сбербанк купить" href={`/${Pages.SberBuy}`} />
        <LinkTab label="сбербанк продать" href={`/${Pages.SberSell}`} />
        <LinkTab label="тинькофф купить" href={`/${Pages.TinkBuy}`} />
        <LinkTab label="тинькофф продать" href={`/${Pages.TinkSell}`} />
      </Tabs>
    </Box>
  );
}
