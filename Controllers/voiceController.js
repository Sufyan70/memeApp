const VoiceNote = require('../Models/voiceModel');
const path = require('path');
const moodKeywords = require('../keyWords'); 

exports.getVoiceNote = async (req, res) => {
  const { mood, userInput } = req.body; 

  const keywordsForMood = moodKeywords[mood] || [];

  const foundKeyword = keywordsForMood.find(keyword => userInput.includes(keyword));

  if (!foundKeyword) {
    return res.status(404).json({ message: "No voice note found for this mood and input" });
  }

  try {
    const voiceNote = await VoiceNote.findOne({ mood: mood, keywords: foundKeyword });

    if (voiceNote) {
      const filePath = path.join(__dirname, '../voice-notes', voiceNote.fileUrl);
      return res.sendFile(filePath);  
    } else {
      return res.status(404).json({ message: "No voice note found for this mood and keyword" });
    }
  } catch (error) {
    console.error("Error fetching voice note:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
