// Redux store
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'
import {
  accountsInit
} from './actions'

let middleware = (process.env.NODE_ENV !== 'production')
  ? applyMiddleware(thunk, logger())
  : applyMiddleware(thunk)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // || compose

const store = createStore(reducers, {}, composeEnhancer(middleware))

// Get accounts on store load
store.dispatch(accountsInit())

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducers = require('./reducers/index')
    store.replaceReducer(nextReducers)
  })
}

export default store
