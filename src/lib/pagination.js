import { slice } from 'tinyfunk'

import min from './min'

export const PAGE_SIZE = 25

export const first = ({ page }) =>
  page * PAGE_SIZE + 1

export const last = ({ page, results }) =>
  min(results.length, (page + 1) * PAGE_SIZE)

export const paginate = ({ page, results }) => {
  const lo = page * PAGE_SIZE
  const hi = lo + PAGE_SIZE

  return slice(lo, hi, results)
}
