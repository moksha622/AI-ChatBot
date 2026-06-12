# 🤖 AI ChatBot

An AI-powered chatbot built using React.js, Node.js, Express.js, MongoDB Atlas, and the Groq API. The chatbot supports text chat, voice input, chat memory, document uploads, and OCR-based image text extraction.

---

## 🚀 Features

### 💬 AI Chat

* Real-time AI conversations using Groq API
* Fast and intelligent responses
* Conversation history stored in MongoDB

### 🎤 Voice Input

* Speech-to-text support
* Microphone-based message input
* Built using React Speech Recognition

### 🧠 Chat Memory

* Remembers previous messages
* Context-aware conversations
* Stores chat history in MongoDB Atlas

### 📄 Document Processing

Supports reading and analyzing:

* PDF files
* DOCX files
* TXT files

Users can upload documents and ask questions about their content.

### 🖼️ Image OCR

Supports extracting text from:

* JPG
* JPEG
* PNG

The chatbot can read text contained inside images and answer questions about it.

### 🗑️ Clear Chat

* Clears current conversation
* Resets voice transcript
* Provides a clean chat experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Speech Recognition

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### AI

* Groq API
* Llama 3.3 70B Versatile Model

### File Processing

* Multer
* PDF Parse
* Mammoth
* Tesseract OCR

---

## 📁 Project Structure

```text
AI-ChatBot/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/moksha622/AI-ChatBot.git
```

### 2. Enter Project

```bash
cd AI-ChatBot
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

Open a new terminal:

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key
```

---

## Database Setup

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Add your IP address to Network Access.
4. Copy the MongoDB connection string.
5. Add it to the `.env` file.

---

## Groq API Setup

1. Create a Groq account.
2. Generate an API key.
3. Add the key to `.env`.

---

## Supported Upload Types

| File Type | Supported |
| --------- | --------- |
| PDF       | ✅         |
| DOCX      | ✅         |
| TXT       | ✅         |
| JPG       | ✅         |
| JPEG      | ✅         |
| PNG       | ✅         |

---

## Future Improvements

* User Authentication
* Multiple Chat Sessions
* Dark Mode
* Chat Export to PDF
* Online Deployment
* Drag & Drop Uploads
* Streaming AI Responses
* Mobile Application Version

---

## Author

**Moksha Higgoda**

GitHub: https://github.com/moksha622

---

## License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, please consider giving it a star on GitHub.

