import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { render } from '@testing-library/react';
import todoReducer from './store/todo/reducer';
import todoSaga from './store/todo/sagas';

export function renderWithStore(ui, { preloadedState = {}, ...renderOptions } = {}) {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: { todo: todoReducer },
        preloadedState: preloadedState.todos ? { todo: { list: preloadedState.todos, loading: false } } : undefined,
        middleware: getDefault =>
            getDefault({ thunk: false }).concat(sagaMiddleware),
    });

    sagaMiddleware.run(todoSaga);

    return render(<Provider store={store}>{ui}</Provider>);
}