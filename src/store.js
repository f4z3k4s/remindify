import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import rootReducer from './ducks'

/**
 * Usual store initialization
 */
const store = createStore(
  rootReducer,
  // applyMiddleware(logger),
)

export default store

