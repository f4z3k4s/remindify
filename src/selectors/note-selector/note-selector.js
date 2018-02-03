import { createSelector } from 'reselect'

const getIsAnimating = state => state.ui.isAnimating

const Selector = createSelector(
  getIsAnimating,
  isAnimating => ({ isAnimating })
)

export default Selector