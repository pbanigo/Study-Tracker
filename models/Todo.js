const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todoItem: {
    type: String,
    required: true,
  },
  textArea: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
