import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Ad } from "./pages/ad";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Layout } from "./shared/ui/layout";
import { Ads, Pages } from "./shared/constants";
import { NotFound } from "./pages/notFound";
import { useEffect } from "react";
import { getWorkingAds } from "./entities/ad";
import { globalStore } from "./shared/store/global.store";
function App() {
  useEffect(() => {
    (async () => {
      const workingAds = await getWorkingAds();
      globalStore.setWorkingAds = workingAds;
    })();
  });
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path={`/${Pages.SberBuy}`}
          index
          element={<Ad ad={Ads.SberBuy} />}
        />
        <Route path={`/${Pages.SberSell}`} element={<Ad ad={Ads.SberSell} />} />
        <Route path={`/${Pages.TinkBuy}`} element={<Ad ad={Ads.TinkBuy} />} />
        <Route path={`/${Pages.TinkSell}`} element={<Ad ad={Ads.TinkSell} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
