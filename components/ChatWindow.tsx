"use client";
import React, { useState } from "react";

const ChatWindow = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    // Placeholder for bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "🤖 (LLM response goes here...)", sender: "bot" },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-24 right-4 max-w-sm w-80 bg-white dark:bg-zinc-800 shadow-xl rounded-lg overflow-hidden z-50 flex flex-col h-[420px] border dark:border-zinc-700">
      <div className="px-4 py-3 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
          Crypto AI
        </h2>
        <div className="flex gap-2 items-center">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Online
          </span>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-red-500 text-lg font-bold"
          >
            ✖
          </button>
        </div>
      </div>

      <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message text-white max-w-xs rounded-lg px-3 py-1.5 text-sm ${
              msg.sender === "user"
                ? "self-start bg-zinc-500"
                : "self-end bg-blue-500"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="px-3 py-2 border-t dark:border-zinc-700">
        <div className="flex gap-2">
          <input
            placeholder="Ask me anything..."
            className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
