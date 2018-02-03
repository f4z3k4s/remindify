import { createSelector } from 'reselect'

const getNotes = state => state.notes
const getFavoriteToggled = state => state.ui.favoriteToggled
const getLoading = state => state.ui.loading

const Selector = createSelector(
  getNotes,
  getFavoriteToggled,
  getLoading,
  (notes, favoriteToggled, loading) => ({ 
    notes: favoriteToggled ? notes.filter(note => note.isFavorite) : notes,
    loading,
  })
)

export default Selector