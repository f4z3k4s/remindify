import { createSelector } from 'reselect'

const getNotes = state => state.notes
const getFavoriteToggled = state => state.ui.favoriteToggled

const Selector = createSelector(
  getNotes,
  getFavoriteToggled,
  (notes, favoriteToggled) => ({ 
    notes: favoriteToggled ? notes.filter(note => note.isFavorite) : notes,
  })
)

export default Selector