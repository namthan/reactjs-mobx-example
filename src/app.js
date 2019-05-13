import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import { Provider } from 'mobx-react'
import stores from './stores'

import 'semantic-ui-css/semantic.min.css'
import './scss/styles.scss'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)