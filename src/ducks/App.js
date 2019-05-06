import { action, error, handle, onSuccess } from '@articulate/ducks'
import tinygen from 'tinygen'

import {
  assoc, compose, constant, map, merge, nAry,
  pick, pipe, prop, sortBy
} from 'tinyfunk'

import assocWith from '../lib/assocWith'
import fuzzy from '../lib/fuzzy'

export const FETCH_USERS  = 'FETCH_USERS'
export const NEXT_PAGE    = 'NEXT_PAGE'
export const PREV_PAGE    = 'PREV_PAGE'
export const SEARCH_USERS = 'SEARCH_USERS'

export const init = {
  list: [],
  page: 0,
  query: '',
  results: []
}

const addId =
  assocWith('id', nAry(0, tinygen))

const clean =
  pick(['first_name', 'last_name', 'address', 'city', 'state', 'zip'])

const goToNext = state =>
  assoc('page', state.page + 1, state)

const goToPrev = state =>
  assoc('page', state.page - 1, state)

const loadUsers = (state, users) => {
  const list = parseUsers(users)
  return merge(state, { list, results: list })
}

const parseUsers =
  pipe(
    map(compose(addId, clean)),
    sortBy(prop('first_name'))
  )

const performSearch = (state, query) =>
  merge(state, {
    page: 0,
    query,
    results: fuzzy(query)(state.list)
  })

export default handle(init, {
  [ FETCH_USERS  ]: onSuccess(loadUsers),
  [ NEXT_PAGE    ]: goToNext,
  [ PREV_PAGE    ]: goToPrev,
  [ SEARCH_USERS ]: performSearch
})

export const fetchUsers = () =>
  fetch(`${process.env.PUBLIC_URL}/users.json`)
    .then(res => res.json())
    .then(
      action(FETCH_USERS),
      error(FETCH_USERS)
    )

export const nextPage    = constant(action(NEXT_PAGE, null))
export const prevPage    = constant(action(PREV_PAGE, null))
export const searchUsers = action(SEARCH_USERS)
