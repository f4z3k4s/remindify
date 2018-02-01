import { initialState } from './notes-initial-state'
export * from './notes-initial-state'
/**
 * Action types 
 */
export const types = {
  CREATE_NOTE: 'notes/CREATE_NOTE',
  DELETE_NOTE: 'notes/DELETE_NOTE',
  FAVORITE_NOTE: 'notes/FAVORITE_NOTE',
}

/**
 * Notes reducer 
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NOTE: {
      return [
        ...state,
        {
          text: action.payload,
          id: state.length,
          isFavorite: false,
        },
      ]
    }

    case types.DELETE_NOTE: {
      const { id } = action.payload
      return [...state]
        .filter(note => note.id !== id)
    }

    case types.FAVORITE_NOTE: {
      const { id } = action.payload
      const idx = state.findIndex(note => note.id === id)
      const newState = [...state]
      newState[idx] = {
        ...newState[idx],
        isFavorite: !newState[idx].isFavorite,
      }

      return newState
    }
    
    default:
      return state
  }
}
export default reducer


/**
 * Action creators 
 */
const createNote = payload => ({
  type: types.CREATE_NOTE,
  payload,
})

const deleteNote = id => ({
  type: types.DELETE_NOTE,
  payload: {
    id,
  },
})

const favoriteNote = id => ({
  type: types.FAVORITE_NOTE,
  payload: { id },
})

export const actionCreators = {
  createNote,
  deleteNote,
  favoriteNote,
}