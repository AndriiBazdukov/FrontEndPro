const BASE_URL = 'https://6973627ab5f46f8b58271291.mockapi.io/todos';

export const fetchTodos = () =>
    fetch(BASE_URL).then(res => res.json());

export const createTodo = text =>
    fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, completed: false }),
    }).then(res => res.json());

export const updateTodo = todo =>
    fetch(`${BASE_URL}/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    }).then(res => res.json());

export const deleteTodo = id =>
    fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });

export const clearTodos = async () => {
    const todos = await fetchTodos();

    for (const todo of todos) {
        await fetch(`${BASE_URL}/${todo.id}`, {
            method: 'DELETE',
        });
    }
};