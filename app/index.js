// Import the page's CSS. Webpack will know what to do with it.
import './style/app.css'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import './init'

import store from './store'

import App from './components/App/index.js'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
