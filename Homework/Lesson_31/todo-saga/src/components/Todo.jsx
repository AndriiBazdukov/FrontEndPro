import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    clearTodos,
} from '../store/todo/actions';

export default function Todo() {
    const dispatch = useDispatch();
    const { list, loading } = useSelector(state => state.todo);
    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    const handleAdd = () => {
        if (text.trim().length < 3) return;
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <div>
            <h2>Todo (Redux-Saga)</h2>

            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <button onClick={() => dispatch(clearTodos())}>Clear</button>

            {loading && <p>Loading...</p>}

            <ul>
                {list.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() =>
                                dispatch(
                                    updateTodo({
                                        ...todo,
                                        completed: !todo.completed,
                                    })
                                )
                            }
                        />

                        <input
                            value={todo.text}
                            onChange={e =>
                                dispatch(
                                    updateTodo({
                                        ...todo,
                                        text: e.target.value,
                                    })
                                )
                            }
                        />

                        <button onClick={() => dispatch(deleteTodo(todo.id))}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}