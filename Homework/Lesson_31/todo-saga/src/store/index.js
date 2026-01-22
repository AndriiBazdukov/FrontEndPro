import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './todo/reducer';
import todoSaga from './todo/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware: getDefault =>
        getDefault({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(todoSaga);
