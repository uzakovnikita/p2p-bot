import { RequestHandler } from 'express'
import { getRequestedAdFromDb } from './_utils'
import { ApiStatuses } from './constants'
import { Errors } from '../constants'
import { db } from '../db'

export const getAdId: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req)

  if (currentAd) {
    return res.status(200).json({ id: currentAd.id, status: ApiStatuses.Ok })
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.Error, error: Errors.AdNotFound })
}

export const setAdId: RequestHandler = (req, res) => {
  const { id } = req.body
  const currentAd = getRequestedAdFromDb(req)

  if (currentAd && id) {
    currentAd.id = id

    return res.status(200).json({ id: currentAd.id, status: ApiStatuses.Ok })
  }

  return res
    .status(400)
    .json({ status: ApiStatuses.Error, error: Errors.AdNotFound })
}

export const getAdIds: RequestHandler = (req, res) => {
  return res
    .status(200)
    .json({ ids: db.ads.map((ad) => ad.id), status: ApiStatuses.Ok })
}

export const getAdById: RequestHandler = (req, res) => {
  const currentAd = getRequestedAdFromDb(req)
  if (currentAd) {
    return res.status(200).json({ ad: currentAd, status: ApiStatuses.Ok })
  }
  return res.status(400).json({
    status: ApiStatuses.Error,
    error: Errors.AdNotFound,
  })
}

export const getAllAds: RequestHandler = (req, res) => {
  return res.status(200).json({ ads: db.ads, status: ApiStatuses.Ok })
}
