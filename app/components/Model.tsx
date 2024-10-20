"use client";
import { useState } from "react";
import { useConversation } from "../ConversationContext";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Model() {
  const [userInput, setUserInput] = useState(""); // Tracks user input
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [error, setError] = useState(""); // Tracks errors
  const [response, setResponse] = useState(""); // Tracks AI response

  const { conversationHistory, addMessage } = useConversation(); // Access conversation context

  const genAI = new GoogleGenerativeAI(
    "AIzaSyBCPAFrw9k6enoMOGrGPLjQfwlTDBMiHWI"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  // Validate conversation history to ensure correct format

  const generateAI = async () => {
    try {
      setLoading(true); // Start loading

      addMessage("user", userInput);
      // Prepare the prompt with conversation history and user input
      let prompt = conversationHistory
        .map((msg) => `${msg.role}: ${msg.content}`)
        .join("\n"); // Format the history as a string
      prompt += `\n main question: ${userInput}`; // Add the current user input

      // Invoke the model with the formatted prompt
      const result = await model.generateContent(prompt);

      const aiResponse = result?.response?.text() || "[No response available]";
      console.log(aiResponse); // Log the response

      // Add the assistant's response to the conversation history
      if (aiResponse) {
        addMessage("assistant", aiResponse);
        setResponse(aiResponse); // Update UI with response
      }

      setError(""); // Clear any previous errors
    } catch (err) {
      console.error("Error generating AI response:", err);
      setError("Failed to generate response. Check console for details.");
    } finally {
      setLoading(false); // Stop loading
      setUserInput(""); // Clear input field
    }
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <input
        type="text"
        placeholder="Enter your question or message"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
      />
      <button onClick={generateAI} disabled={loading || !userInput}>
        {loading ? "Generating..." : "Generate"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
      <div style={{ marginTop: "20px" }}>
        <h2>Conversation History:</h2>
        <ul>
          {conversationHistory
            .filter((msg) => msg.role !== "system") // Exclude system messages
            .map((msg, index) => (
              <li key={index}>
                <strong>{msg.role}:</strong> {msg.content}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
