import { put, takeEvery, delay } from 'redux-saga/effects';
import * as types from './types';
import { loadTodosSuccess } from './actions';

function* loadTodosSaga() {

  const mockTodos = [
    { id: 1, text: 'Test 1', completed: false },
    { id: 2, text: 'Test 2', completed: true },
  ];

  yield put(loadTodosSuccess(mockTodos));
}

export default function* todoSaga() {
  yield takeEvery(types.LOAD_TODOS, loadTodosSaga);
}
