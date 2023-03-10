const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.body._id);
  todo.completed = !todo.completed;
  const newTodo = await Todo.findByIdAndUpdate(req.body._id, todo);
  res.status(200).json(newTodo);
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(200).json("Todo Deleted");
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
