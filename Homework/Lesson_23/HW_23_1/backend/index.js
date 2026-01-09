const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./mongo/todo.model");

const connect = mongoose.connect(
  "mongodb+srv://andrbaa_db_user:S30PQapNQihKnJ4o@cluster0.irbzggn.mongodb.net/?appName=Cluster0"
);
connect.then(() => console.log("DB connected!"));

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on localhost:8080...");
});

app.post("/api/todos", async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/api/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.put("/api/todos/:id", async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(todo);
});

app.delete("/api/todos/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});
