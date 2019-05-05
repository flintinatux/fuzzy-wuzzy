import React, { Fragment, useEffect } from 'react'
import { useReducer } from 'reinspect'

import reducer, { fetchUsers, init } from '../ducks/Users'
import User from './User'

import {
  search, searchInput, userList, userTable
} from './Users.module.scss'

const Users = () => {
  const [ state, dispatch ] = useReducer(reducer, init, 'Users')

  // eslint-disable-next-line
  useEffect(() => { fetchUsers().then(dispatch) }, [ true ])

  return (
    <Fragment>
      <div className={search}>
        <input
          autoFocus
          className={searchInput}
          placeholder="Search by anything!"
        />
      </div>

      <div className={userList}>
        <table className={userTable}>
          <tbody>
            { state.results.map(User) }
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Users
