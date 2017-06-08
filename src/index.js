import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Styles
import './index.css'

// Store
import store from './store'

// App
import App from './App'

// PWA
import registerServiceWorker from './registerServiceWorker'

// Material UI
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
