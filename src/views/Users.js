import { identity, tap } from 'tinyfunk'
import React, { Fragment, useEffect } from 'react'
import { useReducer } from 'reinspect'

import reducer, { fetchUsers } from '../ducks/Users'

const Users = () => {
  const [ state, dispatch ] = useReducer(reducer, {}, 'Users')

  useEffect(() => { fetchUsers().then(dispatch) }, [ true ])

  return (
    <Fragment>
      <div></div>
    </Fragment>
  )
}

export default Users
