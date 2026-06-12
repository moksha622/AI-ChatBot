import { useState } from "react";
import axios from "axios";
import "./App.css";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [pdfText, setPdfText] = useState("");
  const [fileName, setFileName] = useState("");

  const {
    transcript,
    resetTranscript,
  } = useSpeechRecognition();

  const uploadDocument = async (event) => {
    const file = event.target.files[0];

    if (!file) return;
    setFileName(file.name);

    const formData = new FormData();

    formData.append("pdf", file);

    const res = await axios.post(
      "http://localhost:5000/api/document/upload",
      formData
    );

    setPdfText(res.data.text);

    console.log("DOCUMENT TEXT:");
    console.log(res.data.text);

    alert("Document Uploaded Successfully");
  };

  const sendMessage = async () => {
    const finalMessage = message || transcript;

    if (!finalMessage) return;

    const userMsg = {
      sender: "user",
      text: finalMessage,
    };

    setChat((prev) => [...prev, userMsg]);

    const res = await axios.post(
      "http://localhost:5000/api/chat",
      {
        message: `
DOCUMENT CONTENT:

${pdfText}

QUESTION:

${finalMessage}
`,
      }
    );

    const aiMsg = {
      sender: "ai",
      text: res.data.reply,
    };

    setChat((prev) => [...prev, aiMsg]);

    setMessage("");
    resetTranscript();
  };

  return (
    <div className="container">
      <h1>AI Chatbot</h1>

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user"
                ? "user-message"
                : "ai-message"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="upload-container">

  <label
    htmlFor="fileUpload"
    className="upload-btn"
  >
    📁 Upload File
  </label>

  <input
    id="fileUpload"
    type="file"
    accept=".pdf,.docx,.txt,.pptx,.jpg,.jpeg,.png"
    onChange={uploadDocument}
    hidden
  />

  <span className="file-name">
    {fileName || "No file selected"}
  </span>

</div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask anything..."
          value={message || transcript}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button onClick={sendMessage}>
          Send
        </button>

        <button
          onClick={() =>
            SpeechRecognition.startListening()
          }
        >
          🎤 Speak
        </button>

        <button
          onClick={() => {
            setChat([]);
            setMessage("");
            resetTranscript();
          }}
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
}

export default App;