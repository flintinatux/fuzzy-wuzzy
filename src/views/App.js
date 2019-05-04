import React from 'react'

import {
  app,
  appLogo,
  appHeader,
  appLink
} from './App.module.scss'

const App = () =>
  <div className={app}>
    <header className={appHeader}>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={appLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>

export default App
