import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

import { initialState, types, actionCreators  } from '../../ducks/notes'

function* createNote(action) {
  try {
  /* It would look like this if we had an API */
  //  const payload = yield call(NotesApi.createNote, action.payload)
    const { payload } = action
    yield call(delay, 500) // fake API call
    yield put(actionCreators.createNoteSuccess(payload))
  } catch (e) {
    /* place to handle fetch errors */
    // yield put(actionCreators.createNoteError(e.message))
  }
}

function* fetchNotes() {
  try {
  /* It would look like this if we had an API */
  //  const payload = yield call(NotesApi.fetchNotes)
    const payload = initialState
    yield call(delay, 500) // fake API call
    yield put(actionCreators.fetchNotesSuccess(payload))
  } catch (e) {
    /* place to handle fetch errors */
    // yield put(actionCreators.createNoteError(e.message))
  }
}

export function* notesSaga() {
  yield takeEvery(types.CREATE_NOTE, createNote)
  yield takeEvery(types.FETCH_NOTES, fetchNotes)
}