import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api/todoApi';

function* loadTodos() {
  const todos = yield call(api.fetchTodos);
  yield put({ type: 'LOAD_TODOS_SUCCESS', payload: todos });
}

function* addTodo(action) {
  const todo = yield call(api.createTodo, action.payload);
  yield put({ type: 'ADD_TODO_SUCCESS', payload: todo });
}

function* updateTodo(action) {
  const todo = yield call(api.updateTodo, action.payload);
  yield put({ type: 'UPDATE_TODO_SUCCESS', payload: todo });
}

function* deleteTodo(action) {
  yield call(api.deleteTodo, action.payload);
  yield put({ type: 'DELETE_TODO_SUCCESS', payload: action.payload });
}

function* clearTodos() {
  yield call(api.clearTodos);
  yield put({ type: 'CLEAR_TODOS_SUCCESS' });
}

export default function* todoSaga() {
  yield takeEvery('LOAD_TODOS', loadTodos);
  yield takeEvery('ADD_TODO', addTodo);
  yield takeEvery('UPDATE_TODO', updateTodo);
  yield takeEvery('DELETE_TODO', deleteTodo);
  yield takeEvery('CLEAR_TODOS', clearTodos);
}