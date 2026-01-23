import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.list);

    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        if (todos.length === 0) {
            dispatch({ type: 'LOAD_TODOS' });
        }
    }, [dispatch, todos.length]);

    const openEdit = todo => {
        setEditTodo(todo);
        setIsOpen(true);
    };

    const closeEdit = () => {
        setIsOpen(false);
        setEditTodo(null);
    };

    const saveEdit = () => {
        if (!editTodo.text.trim()) return;

        dispatch({
            type: 'UPDATE_TODO',
            payload: editTodo,
        });

        closeEdit();
    };

    return (
        <div>
            <h1>TODO</h1>

            <input
                placeholder="Enter TODO"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    if (!text.trim()) {
                        setError('Todo text is required');
                        return;
                    }
                    setError('');
                    dispatch({ type: 'ADD_TODO', payload: text });
                    setText('');
                }}
            >
                Add
            </button>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            <button onClick={() => dispatch({ type: 'CLEAR_TODOS' })}>
                Clear
            </button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() =>
                                dispatch({
                                    type: 'UPDATE_TODO',
                                    payload: {
                                        ...todo,
                                        completed: !todo.completed,
                                    },
                                })
                            }
                        />

                        <span
                            style={{
                                textDecoration: todo.completed
                                    ? 'line-through'
                                    : 'none',
                            }}
                        >
                            {todo.text}
                        </span>

                        <button onClick={() => openEdit(todo)}>
                            Edit
                        </button>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: 'DELETE_TODO',
                                    payload: todo.id,
                                })
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            { }
            {isOpen && (
                <div style={overlayStyle}>
                    <div style={modalStyle}>
                        <h3>Edit Todo</h3>

                        <input
                            value={editTodo.text}
                            onChange={e =>
                                setEditTodo({
                                    ...editTodo,
                                    text: e.target.value,
                                })
                            }
                        />

                        <div style={{ marginTop: 10 }}>
                            <button onClick={saveEdit}>Save</button>
                            <button onClick={closeEdit}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const modalStyle = {
    background: '#fff',
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
};