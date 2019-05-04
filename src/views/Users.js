import React, { Fragment, useEffect } from 'react'
import { useReducer } from 'reinspect'

import reducer, { fetchUsers, init } from '../ducks/Users'
import { search, searchInput, userList } from './Users.module.scss'
import User from './User'

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
        { state.results.map(User) }
      </div>
    </Fragment>
  )
}

export default Users
