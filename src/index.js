import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
    <MuiThemeProvider>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
