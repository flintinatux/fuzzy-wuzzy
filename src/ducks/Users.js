import { action, error, handle, onSuccess } from '@articulate/ducks'
import tinygen from 'tinygen'

import {
  compose, join, map, merge, pipe, prop, props, slice, sortBy
} from 'tinyfunk'

const FETCH_USERS = 'FETCH_USERS'
const pageSize = 50

export const init = {
  list: [],
  page: 0,
  query: '',
  results: []
}

const searchText =
  pipe(
    props([
      'first_name',
      'last_name',
      'address',
      'city',
      'state',
      'zip'
    ]),
    join(' ')
  )

const indexForSearch = user =>
  merge(user, {
    id: tinygen(6),
    search: searchText(user)
  })

const paginate = ({ list, page }) => {
  const lo = page * pageSize
  const hi = lo + pageSize

  return slice(lo, hi, list)
}

const parseUsers =
  compose(sortBy(prop('first_name')), map(indexForSearch))

const loadUsers = (state, users) => {
  const { page } = state
  const list = parseUsers(users)

  return merge(state, { list, results: paginate({ list, page }) })
}

export default handle(init, {
  [ FETCH_USERS ]: onSuccess(loadUsers)
})

export const fetchUsers = () =>
  fetch('users.json')
    .then(res => res.json())
    .then(
      action(FETCH_USERS),
      error(FETCH_USERS)
    )
