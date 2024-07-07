import TimeComponent from "./TimeComponent";

interface Message {
  id: string; // Unique message ID
  recipientId: string; // ID of the person who received the message
  dateSent: Date; // Date when the message was sent
  content: string; // Content of the message
  timeSent: TimeComponent; // Time when the message was sent
  sender: string;
}

export default Message;
