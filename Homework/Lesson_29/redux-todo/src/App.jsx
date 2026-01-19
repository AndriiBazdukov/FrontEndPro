import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

function App() {
  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Redux + Formik TODO</h2>

      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;