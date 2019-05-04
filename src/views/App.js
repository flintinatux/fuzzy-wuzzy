import React from 'react'

import { app, modal, title } from './App.module.scss'
import Users from './Users'

const App = () =>
  <div className={app}>
    <header>
      <h1 className={title}>Fuzzy wuzzy!</h1>
    </header>

    <section className={modal}>
      <Users />
    </section>
  </div>

export default App
