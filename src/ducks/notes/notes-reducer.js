import { initialState } from './notes-initial-state'

/**
 * Action types 
 */
export const types = {
  CREATE_NOTE: 'notes/CREATE_NOTE',
  CREATE_NOTE_SUCCESS: 'notes/CREATE_NOTE_SUCCESS',
  CREATE_NOTE_ERROR: 'notes/CREATE_NOTE_ERROR',
  FETCH_NOTES: 'notes/FETCH_NOTES',
  FETCH_NOTES_SUCCESS: 'notes/FETCH_NOTES_SUCCESS',
  FETCH_NOTES_ERROR: 'notes/FETCH_NOTES_ERROR',
  DELETE_NOTE: 'notes/DELETE_NOTE',
  FAVORITE_NOTE: 'notes/FAVORITE_NOTE',
  SLIDE_LEFT: 'notes/SLIDE_LEFT',
  SLIDE_RIGHT: 'notes/SLIDE_RIGHT',
  SLIDE_BACK_FROM_LEFT: 'notes/SLIDE_BACK_FROM_LEFT',
  SLIDE_BACK_FROM_RIGHT: 'notes/SLIDE_BACK_FROM_RIGHT',
}

/* Internal helper functions, not to be exported */
const updatePosition = (state, action, position) => {
  const { id } = action.payload  
  const idx = state.findIndex(note => note.id === id)
  const newState = [...state]
  newState[idx] = {
    ...newState[idx],
    position,
  }

  return newState
}

let nextId = initialState.length - 1

/**
 * Notes reducer 
 */
const reducer = (state = [], action) => {
  switch (action.type) {
  case types.CREATE_NOTE_SUCCESS: {
    nextId += 1
    return [
      ...state,
      {
        text: action.payload,
        id: nextId,
        isFavorite: false,
        position: 'center',
      },
    ]
  }

  case types.FETCH_NOTES_SUCCESS: {
    return action.payload
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

  case types.SLIDE_LEFT: {
    return updatePosition(state, action, 'left')
  }

  case types.SLIDE_RIGHT: {
    return updatePosition(state, action, 'right')
  }

  case types.SLIDE_BACK_FROM_LEFT:
  case types.SLIDE_BACK_FROM_RIGHT: {
    return updatePosition(state, action, 'center')
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

const createNoteSuccess = payload => ({
  type: types.CREATE_NOTE_SUCCESS,
  payload,
})

const createNoteError = payload => ({
  type: types.CREATE_NOTE_ERROR,
  payload,
})

const fetchNotes = () => ({
  type: types.FETCH_NOTES,
})

const fetchNotesSuccess = payload => ({
  type: types.FETCH_NOTES_SUCCESS,
  payload,
})

const fetchNotesError = payload => ({
  type: types.FETCH_NOTES_ERROR,
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

const slideLeft = id => ({
  type: types.SLIDE_LEFT,
  payload: { id },
})

const slideRight = id => ({
  type: types.SLIDE_RIGHT,
  payload: { id },  
})

const slideBackFromLeft = id => ({
  type: types.SLIDE_BACK_FROM_LEFT,
  payload: { id },  
})

const slideBackFromRight = id => ({
  type: types.SLIDE_BACK_FROM_RIGHT,
  payload: { id },  
})

export const actionCreators = {
  createNote,
  createNoteSuccess,
  createNoteError,
  fetchNotes,
  fetchNotesSuccess,
  fetchNotesError,
  deleteNote,
  favoriteNote,
  slideLeft,
  slideRight,
  slideBackFromLeft,
  slideBackFromRight,
}