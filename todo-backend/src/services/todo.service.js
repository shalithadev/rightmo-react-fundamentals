const Todo = require('../models/todo.model');

exports.getAllTodos = async () => {
  return await Todo.find();
};

exports.createTodo = async (data) => {
  return await Todo.create(data);
};

exports.updateTodo = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};
