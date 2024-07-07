import { Routes, Route, Navigate } from 'react-router-dom';

import { Ad } from './pages/ad';
import { Layout } from './shared/ui/layout';
import { Ads, Pages } from './shared/constants';
import { NotFound } from './pages/notFound';
import { useEffect } from 'react';
import { getWorkingAds } from './entities/ad';
import './App.css';
import { globalStore } from './shared/store/global.store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Spread } from './entities/spread';

function App() {
  useEffect(() => {
    (async () => {
      const workingAds = await getWorkingAds();
      globalStore.setWorkingAds = workingAds;
    })();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            TopInformation={() => (
              <>
                <Spread ad={Ads.SberBuy} />
                <Spread ad={Ads.TinkBuy} />
                <Spread ad={Ads.RaifBuy} />
              </>
            )}
          />
        }
      >
        <Route index element={<Navigate to={`/${Pages.SberBuy}`} />} />
        <Route path={`/${Pages.SberBuy}`} element={<Ad ad={Ads.SberBuy} />} />
        <Route path={`/${Pages.SberSell}`} element={<Ad ad={Ads.SberSell} />} />
        <Route path={`/${Pages.TinkBuy}`} element={<Ad ad={Ads.TinkBuy} />} />
        <Route path={`/${Pages.TinkSell}`} element={<Ad ad={Ads.TinkSell} />} />
        <Route path={`/${Pages.RaifBuy}`} element={<Ad ad={Ads.RaifBuy} />} />
        <Route path={`/${Pages.RaifSell}`} element={<Ad ad={Ads.RaifSell} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
