export const fetchTodos = jest.fn(() =>
    Promise.resolve([])
);

export const createTodo = jest.fn(text =>
    Promise.resolve({
        id: '1',
        text,
        completed: false,
    })
);

export const updateTodo = jest.fn(todo =>
    Promise.resolve(todo)
);

export const deleteTodo = jest.fn(() =>
    Promise.resolve()
);

export const clearTodos = jest.fn(() =>
    Promise.resolve()
);