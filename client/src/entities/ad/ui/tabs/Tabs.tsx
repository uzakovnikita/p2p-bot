import { Tab, Tabs as MuiTabs } from "@mui/material";

export const Tabs = () => {

  return (
    <MuiTabs
      aria-label="basic tabs example"
      variant="scrollable"
      scrollButtons="auto"
      value={0}
    >
      <Tab label="сбер покупка" />
      <Tab label="сбер продажа" />
      <Tab label="тинькоф покупка" />
      <Tab label="тинькоф продажа" />
    </MuiTabs>
  );
};
