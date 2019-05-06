import score from 'string-score'

import {
  filter, identity, map, pipe, reduceObj, sort
} from 'tinyfunk'

import assocWith from './assocWith'

const FUZZINESS = 0.1
const MIN_SCORE = 0.3

const addScore = query =>
  assocWith('score', reduceObj(maxScore(query), -Infinity))

const max = (a, b) =>
  a > b ? a : b

const maxScore = query => (current, val) =>
  max(current, score(String(val), query, FUZZINESS))

const fuzzy = query =>
  query.trim()
    ? pipe(
        map(addScore(query)),
        filter(minScore),
        sort(scoreDesc)
      )
    : identity

const minScore = item =>
  item.score > MIN_SCORE

const scoreDesc = (a, b) =>
  a.score > b.score ? -1 : 1

export default fuzzy
