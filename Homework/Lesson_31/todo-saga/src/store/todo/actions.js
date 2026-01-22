import * as types from './types';

export const loadTodos = () => ({ type: types.LOAD_TODOS });
export const loadTodosSuccess = todos => ({
    type: types.LOAD_TODOS_SUCCESS,
    payload: todos,
});

export const addTodo = text => ({
    type: types.ADD_TODO,
    payload: text,
});

export const updateTodo = todo => ({
    type: types.UPDATE_TODO,
    payload: todo,
});

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    payload: id,
});

export const clearTodos = () => ({
    type: types.CLEAR_TODOS,
});