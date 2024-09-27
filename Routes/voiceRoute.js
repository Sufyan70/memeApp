const express = require ("express")
const { getVoiceNote } = require("../Controllers/voiceController")
const router = express.Router()


router.post('/getVoice',getVoiceNote)

module.exports = router