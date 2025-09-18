import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import axiosClient from "../utils/axioscli";

import image1 from "../assets/Slideshow/History1.jpg";
import image2 from "../assets/Slideshow/jubilee-park.jpg";
import image3 from "../assets/Slideshow/Patratu_Valley_at_night.jpg";
import image4 from "../assets/Slideshow/premium_photo-1691031429261-aeb324882888.jpeg";
import image5 from "../assets/Slideshow/rachi.jpg";
import aranyalogo from "../assets/Logo.png";

const slideshowImages = [image1, image2, image3, image4, image5];

const IMAGE_CHANGE_INTERVAL = 5000;

const ChatAi = () => {
  const [messages, setMessages] = useState([
    {
      role: "model",
      parts: [
        {
          text: " Welcome to the Jharkhand Tourism Guide! How can I assist you today?",
        },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % slideshowImages.length
      );
    }, IMAGE_CHANGE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const cleanText = (text) => text.replace(/\*/g, "").trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [
      ...prev,
      { role: "user", parts: [{ text: userMessage }] },
    ]);
    setInput("");

    try {
      const response = await axiosClient.post("/ai/lingual", {
        message: userMessage,
      });
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: cleanText(response.data.message || "...") }],
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
    <>
      <style>
        {`
          .slideshow-image {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 1.5s ease-in-out;
          }
          .slideshow-image.image-fade-in {
            opacity: 1;
            z-index: 2;
          }
          .slideshow-image.image-fade-out {
            opacity: 0;
            z-index: 1;
          }
        `}
      </style>

      <div className="flex h-screen bg-black">
        <div className="hidden md:block w-1/2 relative overflow-hidden">
          {slideshowImages.map((image, index) => (
            <div
              key={index}
              className={`slideshow-image ${
                index === currentImageIndex
                  ? "image-fade-in"
                  : "image-fade-out"
              }`}
              style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
          ))}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col text-gray-100 bg-black/20 backdrop-blur-md">
          <div className="bg-gray-900/50 backdrop-blur-sm text-white p-4 flex items-center justify-center shadow-md z-10">
            <img src={aranyalogo} alt="Logo" className="h-8 mr-3 rounded-full" />
            <h1 className="font-bold text-lg">Meera : Multi-Lingual Chatbot</h1>
          </div>
          <div className="flex-1 flex justify-center p-4 overflow-hidden">
            <div className="w-full h-full flex flex-col bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/80">
              <div className="flex-1 overflow-y-auto space-y-4 p-6 pr-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-end gap-3 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "model" && (
                      <img
                        src={aranyalogo}
                        className="h-6 w-6 rounded-full"
                        alt="bot-avatar"
                      />
                    )}
                    <div
                      className={`rounded-2xl px-4 py-2.5 max-w-md text-sm shadow-lg whitespace-pre-wrap ${
                        msg.role === "user"
                          ? "bg-green-600 text-white rounded-br-none"
                          : "bg-gray-800 text-gray-200 rounded-bl-none"
                      }`}
                    >
                      {msg.parts[0].text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form
                onSubmit={handleSubmit}
                className="p-4 flex items-center bg-gray-800/80 border-t border-gray-700/60"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow bg-transparent text-gray-100 px-4 py-2 focus:outline-none placeholder-gray-400"
                  placeholder="Ask Meera anything..."
                />
                <button
                  type="submit"
                  className="ml-3 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-colors duration-200"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAi;
