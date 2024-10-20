"use client";
import { useState } from "react";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { useConversation } from "../ConversationContext";

export default function Model() {
  const [userInput, setUserInput] = useState(""); // Tracks user input
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [error, setError] = useState(""); // Tracks errors
  const [response, setResponse] = useState(""); // Tracks AI response

  const { conversationHistory, addMessage } = useConversation(); // Access conversation context

  // Generate response from AI model and update conversation history
  const generateAI = async () => {
    const model = new ChatGoogleGenerativeAI({
      modelName: "gemini-1.5-pro",
      temperature: 0,
      maxOutputTokens: 256,
      timeout: 60000,
      maxRetries: 2,
      apiKey: "AIzaSyBbAxuI2uQtbWVVb6pghLfxgH59PYEc_jA",
    });

    try {
      setLoading(true); // Start loading

      // Add user input to conversation history in the context
      addMessage("user", userInput || "[No message provided]");

      // Invoke the model with the updated conversation history from the context
      const aiResponse = await model.invoke(conversationHistory);

      // Add the assistant's response to conversation history in the context
      addMessage("assistant", aiResponse.content || "[No response available]");

      // Store response for displaying in the UI
      setResponse(aiResponse.content || "[No response available]");
      setError(""); // Clear any previous errors
    } catch (err) {
      console.error("Error generating AI response:", err);
      setError("Failed to generate response. Check console for details.");
    } finally {
      setLoading(false); // Stop loading
      setUserInput(""); // Clear input field
    }

    console.log("Updated Conversation History:", conversationHistory); // Log updated history
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
            .filter((msg) => msg.role === "system" || msg.role === "user") // Exclude system messages
            .map((msg, index) => (
              <li key={index}>
                <strong>{msg.role}:</strong>{" "}
                {msg.content || "[No message provided]"}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
