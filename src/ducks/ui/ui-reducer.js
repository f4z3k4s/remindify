/**
 * Action types 
 */
export const types = {
  SET_NOTE: 'ui/SET_NOTE',
  TOGGLE_FAVORITE: 'ui/TOGGLE_FAVORITE',
  TOGGLE_IS_ANIMATING: 'ui/TOGGLE_IS_ANIMATING',
}

/**
 * Initial state 
 */
export const initialState = {
  currentNote: '',
  favoriteToggled: false,
  sideWidth: 45,
  isAnimating: false,
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

  case types.TOGGLE_IS_ANIMATING: {
    return {
      ...state,
      isAnimating: !state.isAnimating,
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

const toggleIsAnimating = () => ({
  type: types.TOGGLE_IS_ANIMATING,
})

export const actionCreators = {
  setNote,
  toggleFavorite,
  toggleIsAnimating,
}