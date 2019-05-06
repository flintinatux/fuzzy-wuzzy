import { compose } from 'tinyfunk'
import React, { Fragment, useEffect } from 'react'
import { useReducer } from 'reinspect'

import Pagination from './Pagination'
import reducer, { fetchUsers, init, searchUsers } from '../ducks/Users'
import targetVal from '../lib/targetVal'
import User from './User'
import UsersHeader from './UsersHeader'

import {
  searchBar, searchInput, table, thead, tbody, userList
} from '../styles/Users.module.scss'

const Users = () => {
  const [ state, dispatch ] = useReducer(reducer, init, 'Users')

  // eslint-disable-next-line
  useEffect(() => { fetchUsers().then(dispatch) }, [ true ])

  const search =
    compose(dispatch, searchUsers, targetVal)

  return (
    <Fragment>
      <div className={searchBar}>
        <input
          autoFocus
          className={searchInput}
          onChange={search}
          placeholder="Search by anything!"
          value={state.query}
        />

        <Pagination {...state} />
      </div>

      <div className={userList}>
        <table
          cellSpacing="0"
          className={table}
        >
          <thead className={thead}>
            <UsersHeader {...state.results[0]} />
          </thead>
          <tbody className={tbody}>
            { state.results.map(User) }
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Users
