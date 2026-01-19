export default function TodoList({ todos }) {
  if (!todos.length) {
    return <p>No tasks yet</p>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}