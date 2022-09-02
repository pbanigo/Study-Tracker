const mongoose = require('mongoose')

const StudySchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('Study', StudySchema)
