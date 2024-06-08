import { makeAutoObservable } from "mobx";
import { Ads } from "../constants";

class GlobalStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _workingAds: Ads[] = [];

  adOn(ad: Ads) {
    this._workingAds.indexOf(ad) === -1 && this._workingAds.push(ad);
  }

  adOff(ad: Ads) {
    this._workingAds = this._workingAds.filter((workingAd) => workingAd !== ad);
  }

  set setWorkingAds(ads: Ads[]) {
    this._workingAds = ads;
  }

  get getWorkingAds() {
    return this._workingAds;
  }
}

export const globalStore = new GlobalStore();
