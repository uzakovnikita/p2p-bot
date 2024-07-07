import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Pages } from '../../../../constants';
import { Link, useLocation } from 'react-router-dom';

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
      aria-current={props.selected && 'page'}
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
    `/${Pages.RaifBuy}`,
    `/${Pages.RaifSell}`,
  ];

  const currentTab = routerLists.indexOf(pathname);

  return (
    <Box
      sx={{
        width: '100%',
        zIndex: 10,
        opacity: 1,
        bgcolor: 'background.paper',
      }}
    >
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
        <LinkTab label="райфазен купить" href={`/${Pages.RaifBuy}`} />
        <LinkTab label="райфазен продать" href={`/${Pages.RaifSell}`} />
      </Tabs>
    </Box>
  );
}
