import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import axiosClient from "../utils/axioscli";

const ChatAi = () => {
  const [messages, setMessages] = useState([
    {
      role: "model",
      parts: [
        {
          text: "👋 Welcome to Jharkhand Tourism Guide! How can I assist you today?",
        },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Clean function to strip stars and extra symbols
  const cleanText = (text) => {
    return text.replace(/\*/g, "").trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", parts: [{ text: input }] },
    ]);
    const userMessage = input;
    setInput("");

    try {
      const response = await axiosClient.post("/ai/lingual", {
        message: userMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [
            { text: cleanText(response.data.message || "...") }, // ✅ clean here
          ],
        },
      ]);
    } catch (error) {
      console.error("API Error: ", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [
            { text: "⚠️ I encountered an error. Please try again." },
          ],
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen text-gray-100 relative 
      bg-gradient-to-br from-black via-gray-900 to-green-950">
      
      {/* Header */}
      <div className="bg-green-800/90 backdrop-blur-md text-white p-4 flex items-center justify-center shadow-md z-10">
        <img
          src="https://pbs.twimg.com/profile_images/1966113235117166592/yV1jcTwe_400x400.jpg"
          alt="Jharkhand Logo"
          className="h-8 mr-2"
        />
        <h1 className="font-bold text-lg">Jharkhand Tourism Chatbot</h1>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex justify-center px-4 py-6 relative z-10">
        <div className="w-full max-w-3xl flex flex-col 
          bg-gradient-to-br from-gray-900/80 via-black/70 to-green-950/80 
          backdrop-blur-md rounded-2xl shadow-2xl border border-gray-800 p-6">
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-2 max-w-md text-sm shadow-md whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-green-600 text-white rounded-br-none"
                      : "bg-gray-800 text-gray-100 border border-gray-700 rounded-bl-none"
                  }`}
                >
                  {cleanText(msg.parts[0].text)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="mt-4 p-2 flex items-center bg-gray-800/70 rounded-full border border-gray-700"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-transparent text-gray-100 px-4 py-2 focus:outline-none"
              placeholder="Ask about Jharkhand tourism..."
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatAi;
