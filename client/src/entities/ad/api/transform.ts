import { ApiStatuses } from "../../../shared/api/admin/constants";
import { Ads, Id } from "../model";

export const transformAds = (ads: { status: ApiStatuses } & Partial<Ads>) =>
  ads.ads ?? [];

export const transformAdId = (id: { status: ApiStatuses } & Partial<Id>) =>
  id.id ?? "";
