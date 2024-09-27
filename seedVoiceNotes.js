const mongoose = require('mongoose');
const dotenv = require('dotenv');
const VoiceNote = require('./Models/voiceModel');
const ErrorVoiceNote = require('./Models/errorVoiceModel');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const voiceNotes = [
      {
        mood: "happy",
        keywords: ["happy", "joyful", "excited", "cheerful", "content"],
        fileUrl: "happy.mp3"
      },
      {
        mood: "sad",
        keywords: ["sad", "breakup", "crying", "lonely", "depressed"],
        fileUrl: "sad.mp3"
      },
      {
        mood: "angry",
        keywords: ["angry", "furious", "mad", "rage", "irritated"],
        fileUrl: "angry.mp3"
      }
    ];

    const errorVoiceNotes = [
      {
        scenario: "missing_name",
        message: "Kiun bay tera koi name nhi hai?",
        fileUrl: "missing_name.mp3"
      },
      {
        scenario: "missing_country",
        message: "Arctic Circle pe rehta hai kia? Country bata",
        fileUrl: "missing_country.mp3"
      }
    ];

    return Promise.all([
      VoiceNote.insertMany(voiceNotes),
      ErrorVoiceNote.insertMany(errorVoiceNotes) 
    ]);
  })
  .then(() => {
    console.log("Voice notes and error voice notes added successfully");
  })
  .catch((err) => {
    console.error("Error adding voice notes:", err);
  })
  .finally(() => {
    mongoose.disconnect(); 
  });
