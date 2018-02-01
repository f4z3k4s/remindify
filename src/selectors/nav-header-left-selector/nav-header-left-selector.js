import { createSelector } from 'reselect'

const getFavoriteToggled = state => state.ui.favoriteToggled

const Selector = createSelector(
  getFavoriteToggled,
  favoriteToggled => ({ favoriteToggled })
)

export default Selector