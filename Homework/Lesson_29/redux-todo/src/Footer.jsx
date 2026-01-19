import { useSelector } from "react-redux";

export default function Footer() {
    const count = useSelector((state) => state.todos.length);

    return (
        <footer style={{ marginTop: "20px" }}>
            Total todos: <strong>{count}</strong>
        </footer>
    );
}