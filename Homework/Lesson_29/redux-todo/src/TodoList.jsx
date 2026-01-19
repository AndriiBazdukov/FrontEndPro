import { useSelector } from "react-redux";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);

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