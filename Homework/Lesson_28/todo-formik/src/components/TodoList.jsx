import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const validate = (values) => {
    const errors = {};

    if (!values.todo) {
      errors.todo = "Field is required";
    } else if (values.todo.length < 5) {
      errors.todo = "Minimum 5 characters";
    }

    return errors;
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>TODO List</h2>

      <Formik
        initialValues={{ todo: "" }}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          setTodos([...todos, values.todo]);
          resetForm();
        }}
      >
        <Form>
          <Field
            name="todo"
            type="text"
            placeholder="Enter todo..."
          />

          <ErrorMessage
            name="todo"
            component="div"
            style={{ color: "red", fontSize: "14px" }}
          />

          <button type="submit">
            Add
          </button>
        </Form>
      </Formik>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}