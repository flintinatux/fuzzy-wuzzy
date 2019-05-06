import { action, error, handle, onSuccess } from '@articulate/ducks'
import tinygen from 'tinygen'

import {
  compose, map, merge, nAry, pick, pipe, prop, sortBy
} from 'tinyfunk'

import assocWith from '../lib/assocWith'
import fuzzy from '../lib/fuzzy'

export const FETCH_USERS  = 'FETCH_USERS'
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
  [ SEARCH_USERS ]: performSearch
})

export const fetchUsers = () =>
  fetch('users.json')
    .then(res => res.json())
    .then(
      action(FETCH_USERS),
      error(FETCH_USERS)
    )

export const searchUsers = action(SEARCH_USERS)
