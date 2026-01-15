import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText('');
  };

  const removeTodo = id =>
    setTodos(todos.filter(t => t.id !== id));

  return (
    <div>
      <h2>TODO List</h2>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}