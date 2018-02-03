/* eslint-disable no-unused-vars */
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { notesSaga } from './sagas'
import logger from 'redux-logger'

import rootReducer from './ducks'

const sagaMiddleware = createSagaMiddleware()

/**
 * Usual store initialization
 */
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(notesSaga)

export default store

