const express = require("express");
const {chatbotAi} = require("../controllers/chatbot")

const aiRouter  = express.Router();

aiRouter.post("/lingual",chatbotAi);

module.exports = aiRouter