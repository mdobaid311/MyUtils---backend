const express = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos");
const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo).patch(updateTodo);

router.route("/:id").delete(deleteTodo);

module.exports = router;
