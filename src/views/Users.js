import { compose } from 'tinyfunk'
import React, { Fragment } from 'react'

import { paginate } from '../lib/pagination'
import Pagination from './Pagination'
import { searchUsers } from '../ducks/App'
import targetVal from '../lib/targetVal'
import User from './User'
import UsersHeader from './UsersHeader'

import {
  searchBar, searchInput, table, thead, tbody, userList
} from '../styles/Users.module.scss'

const Users = props => {
  const { dispatch, query, results } = props

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
          value={query}
        />

        <Pagination {...props} />
      </div>

      <div className={userList}>
        <table
          cellSpacing="0"
          className={table}
        >
          <thead className={thead}>
            <UsersHeader {...results[0]} />
          </thead>
          <tbody className={tbody}>
            { paginate(props).map(User) }
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Users
