// context/messageContext.tsx
import React, { createContext, useEffect, useState } from "react";
import Message from "../interfaces/Message";

interface MessageContextType {
  messages: Message[];
  addMessage: (message: Message) => void;
}

// Create the context
const MessageContext = createContext<MessageContextType | undefined>(undefined);

// Create a provider component
const MessageContextProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  // Load messages from local storage on initial render
  useEffect(() => {
    const storedMessages = JSON.parse(
      localStorage.getItem("chatMessages") || "[]"
    );
    setMessages(storedMessages);
  }, []);

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageContextProvider };
