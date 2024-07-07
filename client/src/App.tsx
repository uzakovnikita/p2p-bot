import { Routes, Route, Navigate } from "react-router-dom";

import { Ad } from "./pages/ad";
import { Layout } from "./shared/ui/layout";
import { Ads, Pages } from "./shared/constants";
import { NotFound } from "./pages/notFound";
import { useEffect } from "react";
import { getWorkingAds } from "./entities/ad";
import { globalStore } from "./shared/store/global.store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";

function App() {
  
  useEffect(() => {
    (async () => {
      const workingAds = await getWorkingAds();
      globalStore.setWorkingAds = workingAds;
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={`/${Pages.SberBuy}`} />} />
        <Route path={`/${Pages.SberBuy}`} element={<Ad ad={Ads.SberBuy} />} />
        <Route path={`/${Pages.SberSell}`} element={<Ad ad={Ads.SberSell} />} />
        <Route path={`/${Pages.TinkBuy}`} element={<Ad ad={Ads.TinkBuy} />} />
        <Route path={`/${Pages.TinkSell}`} element={<Ad ad={Ads.TinkSell} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
