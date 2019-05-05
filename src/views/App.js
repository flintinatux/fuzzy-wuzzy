import React from 'react'

import { app, container, header, title } from '../styles/App.module.scss'
import Users from './Users'

const App = () =>
  <div className={app}>
    <header className={header}>
      <h1 className={title}>All users</h1>
    </header>

    <section className={container}>
      <Users />
    </section>
  </div>

export default App
