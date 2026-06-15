# 🤖 AI ChatBot

An AI-powered chatbot built using React.js, Node.js, Express.js, MongoDB Atlas, and the Groq API. The chatbot supports AI conversations, voice input, document uploads, OCR-based image text extraction, and persistent chat history.

---

## 🌐 Live Demo

### Frontend (Vercel)

👉 [Click here to view live project](https://ai-chat-bot-beryl-two.vercel.app/)

### Backend API (Railway)

👉 [Click here to view live backend](https://ai-chatbot-production-9b90.up.railway.app)

---

# 🎬 Demo Video

## AI ChatBot
[▶ Watch AI ChatBot Demo]()

---

## 🚀 Features

### 💬 AI Chat

* Real-time AI conversations using Groq API
* Fast and intelligent responses
* Context-aware responses
* Conversation history stored in MongoDB Atlas

### 🎤 Voice Input

* Speech-to-text support
* Microphone-based message input
* Built using React Speech Recognition

### 🧠 Chat Memory

* Stores previous conversations
* MongoDB Atlas integration
* Persistent chat history

### 📄 Document Processing

Supports:

* PDF files
* DOCX files
* TXT files

Users can upload documents and ask questions about their contents.

### 🖼️ OCR Image Text Extraction

Supports:

* JPG
* JPEG
* PNG

The chatbot can extract text from images using OCR and answer questions about the extracted content.

### 🗑️ Clear Chat

* Clears current conversation
* Resets voice transcript
* Fresh chat experience

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
* Llama 3.3 70B Versatile

### File Processing

* Multer
* PDF Parse
* Mammoth
* Tesseract OCR

### Deployment

* Vercel (Frontend Hosting)
* Railway (Backend Hosting)
* GitHub (Version Control)

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

## ⚙️ Local Installation

### 1. Clone Repository

```bash
git clone https://github.com/moksha622/AI-ChatBot.git
```

### 2. Enter Project

```bash
cd AI-ChatBot
```

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## Backend Setup

Open a new terminal:

```bash
cd server
npm install
npm run dev
```

Backend:

```text
http://localhost:5000
```

## Environment Variables

### Server (.env)

Create a `.env` file inside the `server` folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key
```

### Client (.env)

Create a `.env` file inside the `client` folder:

```env
VITE_API_URL=http://localhost:5000
```

For production:

```env
VITE_API_URL=https://ai-chatbot-production-9b90.up.railway.app
```

## Database Setup

1. Create a MongoDB Atlas cluster
2. Create a database user
3. Add IP access in Network Access
4. Copy the MongoDB connection string
5. Add it to `.env`

## Groq API Setup

1. Create a Groq account
2. Generate an API key
3. Add the key to `.env`
4. Restart the backend

## Deployment Guide

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Import repository into Vercel
3. Set Root Directory:

```text
client
```

4. Add Environment Variable:

```env
VITE_API_URL=https://ai-chatbot-production-9b90.up.railway.app
```

5. Deploy

### Backend Deployment (Railway)

1. Import GitHub repository into Railway
2. Set Root Directory:

```text
server
```

3. Add Variables:

```env
MONGO_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key

PORT=5000
```

4. Deploy

## Supported Upload Types

| File Type | Supported |
| --------- | --------- |
| PDF       | ✅         |
| DOCX      | ✅         |
| TXT       | ✅         |
| JPG       | ✅         |
| JPEG      | ✅         |
| PNG       | ✅         |

## Future Improvements

* User Authentication
* Multiple Chat Sessions
* Dark Mode
* Export Chat to PDF
* Drag & Drop Uploads
* Streaming AI Responses
* Mobile App Version
* Multi-language Support
* Advanced Document Analysis

## Author

**Moksha Higgoda**

GitHub:
https://github.com/moksha622

## License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, please consider giving it a star on GitHub.


