import React from 'react'
import ReactDOM from 'react-dom'
import { StateInspector } from 'reinspect'

import './index.css'
import App from './views/App'
import { name } from '../package.json'

ReactDOM.render(
  <StateInspector name={name}>
    <App />
  </StateInspector>,
  document.getElementById('root')
)
