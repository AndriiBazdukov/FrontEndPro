import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();

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
    <Formik
      initialValues={{ todo: "" }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        dispatch(addTodo(values.todo));
        resetForm();
      }}
    >
      <Form>
        <Field
          name="todo"
          type="text"
          placeholder="Enter todo (min 5 chars)"
        />

        <ErrorMessage
          name="todo"
          component="div"
          style={{ color: "red", fontSize: "14px" }}
        />

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}