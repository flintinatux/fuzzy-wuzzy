import React, { useEffect } from 'react'
import { useReducer } from 'reinspect'

import { app, container, header, title } from '../styles/App.module.scss'
import reducer, { fetchUsers, init } from '../ducks/App'
import Users from './Users'

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, init, 'App')

  // eslint-disable-next-line
  useEffect(() => { fetchUsers().then(dispatch) }, [ true ])

  return (
    <div className={app}>
      <header className={header}>
        <h1 className={title}>All users</h1>
      </header>

      <section className={container}>
        <Users
          dispatch={dispatch}
          {...state}
        />
      </section>
    </div>
  )
}

export default App
