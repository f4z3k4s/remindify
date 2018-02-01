/**
 * Action types 
 */
export const types = {
  SET_NOTE: 'ui/SET_NOTE',
  TOGGLE_FAVORITE: 'ui/TOGGLE_FAVORITE',
}

/**
 * Initial state 
 */
export const initialState = {
  currentNote: '',
  favoriteToggled: false,
  sideWidth: 45,
}

/**
 * Current note reducer 
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NOTE: {
      return {
        ...state,
        currentNote: action.payload,
      }
    }

    case types.TOGGLE_FAVORITE: {
      return {
        ...state,
        favoriteToggled: !state.favoriteToggled,
      }
    }
    
    default:
      return state
  }
}
export default reducer


/**
 * Action creators 
 */
const setNote = payload => ({
  type: types.SET_NOTE,
  payload,
})

const toggleFavorite = () => ({
  type: types.TOGGLE_FAVORITE,
})

export const actionCreators = {
  setNote,
  toggleFavorite,
}