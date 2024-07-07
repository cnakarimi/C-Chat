import React, { useState } from "react";
import Emojis from "./Emojis";
import MainPage from "./MainPage";
import Chatroom from "./Chatroom";
import PortalComponent from "../PortalComponent";

const ForAuthUser: React.FC<string> = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const getEmojiHandler = (emoji: string) => {
    setSelectedEmoji(emoji);
  };
  return (
    <>
      <Chatroom />
      <MainPage emojis={selectedEmoji} />
      <PortalComponent />
      <Emojis onEmojiData={getEmojiHandler} />
    </>
  );
};

export default ForAuthUser;
