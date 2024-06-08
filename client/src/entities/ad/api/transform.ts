import { ApiStatuses } from "../../../shared/api/admin/constants";
import { Ads } from "../model";

export const transformAds = (ads: { status: ApiStatuses } & Partial<Ads>) =>
  ads.ads ?? [];
