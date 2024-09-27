const mongoose = require('mongoose');

const errorVoiceNoteSchema = new mongoose.Schema({
  scenario: {
    type: String, 
    required: true,
  },
  message: {
    type: String, 
    required: true,
  },
  fileUrl: {
    type: String, 
    required: true,
  },
});

const ErrorVoiceNote = mongoose.model('ErrorVoiceNote', errorVoiceNoteSchema);
module.exports = ErrorVoiceNote;
