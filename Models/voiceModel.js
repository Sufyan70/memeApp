const mongoose = require("mongoose");

const VoiceNoteSchema = new mongoose.Schema({
    keywords:  [{ type: String, required: true }],
    mood: { type: String, required: true },
    fileUrl: { type: String, required: true }, 
});

module.exports = mongoose.model("VoiceNote", VoiceNoteSchema);
