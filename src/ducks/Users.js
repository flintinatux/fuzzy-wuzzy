import { action, error, handle, onSuccess } from '@articulate/ducks'
import tinygen from 'tinygen'

import {
  compose, map, merge, nAry, pick, pipe, prop, slice, sortBy
} from 'tinyfunk'

import assocWith from '../lib/assocWith'
import fuzzy from '../lib/fuzzy'

const pageSize = 50

const FETCH_USERS  = 'FETCH_USERS'
const SEARCH_USERS = 'SEARCH_USERS'

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
  const { page } = state
  const list = parseUsers(users)

  return merge(state, { list, results: paginate({ list, page }) })
}

const paginate = ({ list, page }) => {
  const lo = page * pageSize
  const hi = lo + pageSize

  return slice(lo, hi, list)
}

const parseUsers =
  pipe(
    map(compose(addId, clean)),
    sortBy(prop('first_name'))
  )

const performSearch = (state, query) => {
  const list = fuzzy(query)(state.list)
  const page = 0
  const results = paginate({ list, page })

  return merge(state, { page, query, results })
}

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
