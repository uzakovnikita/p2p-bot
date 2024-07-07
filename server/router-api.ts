import { Router } from 'express';

import { Errors } from './constants';
import {
  getAdById,
  getAdId,
  getAdIds,
  getAllAds,
  getCurrentPrice,
  getLimit,
  getPower,
  getPriceInterval,
  getPriceStep,
  getSpread,
  getWorkingAds,
  powerOff,
  powerOn,
  setAdId,
  setCurrentPrice,
  setLimit,
  setPriceInterval,
  setPriceStep,
} from './controllers';
import { ApiStatuses } from './controllers/constants';

export const routerApi = Router();

routerApi.get('/limits', getLimit);
routerApi.post('/limits', setLimit);
routerApi.get('/price_step', getPriceStep);
routerApi.post('/price_step', setPriceStep);
routerApi.get('/power', getPower);
routerApi.post('/power_on', powerOn);
routerApi.post('/power_off', powerOff);
routerApi.get('/spread', getSpread);
routerApi.get('/current_price', getCurrentPrice);
routerApi.post('/current_price', setCurrentPrice);
routerApi.get('/price_interval', getPriceInterval);
routerApi.post('/price_interval', setPriceInterval);
routerApi.get('/working_ads', getWorkingAds);
routerApi.get('/ad_id', getAdId);
routerApi.post('/ad_id', setAdId);
routerApi.get('/ad_ids', getAdIds);
routerApi.get('/ad_by_id', getAdById);
routerApi.get('/all_ads', getAllAds);

routerApi.all('*', (req, res) => {
  res.status(404).json({ status: ApiStatuses.Error, error: Errors.NotFound });
});
