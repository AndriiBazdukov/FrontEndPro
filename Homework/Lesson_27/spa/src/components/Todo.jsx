import { useState } from 'react';
import { useTheme } from './ThemeContext'; // ⚠️ перевір шлях

export default function Todo() {
  const { theme } = useTheme();

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos(prev => [
      ...prev,
      { id: Date.now(), text }
    ]);

    setText('');
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className={`todo todo--${theme}`}>
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