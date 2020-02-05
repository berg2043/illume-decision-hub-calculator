import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on 'GET_SPLIT' action
function* getSplit(action) {
  try {
    const response = yield axios.get(`/api/split?calculator_id=${action.payload.calculator_id}&question_id=${action.payload.question_id}`);
    yield put({ type: `SET_SPLIT`, payload: response.data })
  } catch (error) {
    // alert('Sorry, something went wrong while getting questions')
    console.log('Error getting split in saga', error);
  }
}

function* splitSaga() {
  yield takeLatest(`GET_SPLIT`, getSplit);
}

export default splitSaga;