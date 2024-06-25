import React from "react";
import Emojis from "./Emojis";
import MainPage from "./MainPage";
import Chatroom from "./Chatroom";

const ForAuthUser: React.FC = () => {
  return (
    <>
      <Chatroom />
      <MainPage />
      <Emojis />
    </>
  );
};

export default ForAuthUser;
