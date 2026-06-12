const axios = require("axios");
const Chat = require("../models/Chat");

const sendMessage = async (req, res) => {
  try {

    const { message } = req.body;

    // Get previous chats from MongoDB
    const previousChats = await Chat.find()
      .sort({ createdAt: -1 })
      .limit(10);

    // Convert chats into Groq/OpenAI message format
    const formattedChats = previousChats
      .reverse()
      .flatMap(chat => [
        {
          role: "user",
          content: chat.userMessage,
        },
        {
          role: "assistant",
          content: chat.aiResponse,
        },
      ]);

    // Send conversation history + new message to Groq
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          ...formattedChats,
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiMessage =
      response.data.choices[0].message.content;

    const newChat = new Chat({
      userMessage: message,
      aiResponse: aiMessage,
    });

    await newChat.save();

    res.json({
      reply: aiMessage,
    });

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Server Error",
    });

  }
};

module.exports = {
  sendMessage,
};