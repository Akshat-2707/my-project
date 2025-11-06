import React, { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    // Add empty bot message placeholder
    let botMsg = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, botMsg]);

    // Start SSE connection to backend
    const eventSource = new EventSource(
      `http://localhost:5000/api/chat/stream?message=${encodeURIComponent(
        input
      )}`
    );

    // Update bot message as data streams in
    eventSource.onmessage = (e) => {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = e.data;
        return updated;
      });
    };

    // Close SSE when done
    eventSource.addEventListener("done", () => eventSource.close());

    // Clear input box
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      {/* Chat messages */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          minHeight: "400px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              margin: "8px 0",
            }}
          >
            <span
  style={{
    display: "inline-block",
    // backgroundColor removed to make it transparent
    padding: "8px 12px",
    borderRadius: "16px",
    maxWidth: "80%",
    wordBreak: "break-word",
    color: msg.role === "user" ? "#ffffff" : "#ffffff", // white text for both
  }}
>
  {msg.content}
</span>

          </div>
        ))}
      </div>

      {/* Input box and send button */}
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
