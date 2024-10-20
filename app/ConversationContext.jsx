// ConversationContext.js
"use client";

import { createContext, useContext, useState } from "react";

// Create the context
const ConversationContext = createContext();

// Custom hook for using the conversation context easily
export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      "useConversation must be used within a ConversationProvider"
    );
  }
  return context;
};

// Provider component to wrap your application
export const ConversationProvider = ({ children }) => {
  const [conversationHistory, setConversationHistory] = useState([
    {
      role: "system",
      content:
        "You are a friendly study buddy to help study. Remember the user's name and use it when relevant.",
    },
  ]);

  // Extra field to store additional information (as an object)
  const [extraData, setExtraData] = useState({});

  // Function to add a new message to the conversation
  const addMessage = (role, content) => {
    setConversationHistory((prevHistory) => [
      ...prevHistory,
      { role, content },
    ]);
  };

  // Function to update the extraData field
  const updateExtraData = (key, value) => {
    setExtraData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <ConversationContext.Provider
      value={{ conversationHistory, addMessage, extraData, updateExtraData }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
