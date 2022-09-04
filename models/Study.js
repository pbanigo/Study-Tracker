const mongoose = require('mongoose')

const StudySchema = new mongoose.Schema({
  dueDate: {
    type: Date
  },
  studyItem: {
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
}, { timestamps: true })

module.exports = mongoose.model('Study', StudySchema)
