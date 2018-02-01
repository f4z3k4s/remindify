import { combineReducers } from 'redux'

import notes from './notes'
import ui from './ui'

const rootReducer = combineReducers({
  notes,
  ui,
})

export default rootReducer
