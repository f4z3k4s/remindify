import { createSelector } from 'reselect'

const getCurrentNote = state => state.ui.currentNote

const Selector = createSelector(
  getCurrentNote,
  currentNote => ({ currentNote })
)

export default Selector