import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>TODO App</h2>

      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;