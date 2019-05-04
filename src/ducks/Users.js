import { action, error, handle, onSuccess } from '@articulate/ducks'
import { assoc, compose, converge, identity, join, values } from 'tinyfunk'

const FETCH_USERS = 'FETCH_USERS'

const init = {
  list: [],
  query: '',
  results: []
}

const searchText =
  compose(join(' '), values)

const index =
  converge(assoc('search'), [ searchText, identity ])

const loadUsers = (state, list) =>
  ({ list: list.map(index), results: [] })

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
