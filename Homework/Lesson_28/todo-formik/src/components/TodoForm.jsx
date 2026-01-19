import { Formik, Form, Field, ErrorMessage } from "formik";

export default function TodoForm({ onAddTodo }) {
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
                onAddTodo(values.todo);
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

                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
}