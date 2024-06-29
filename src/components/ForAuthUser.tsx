import React from "react";
import Emojis from "./Emojis";
import MainPage from "./MainPage";
import Chatroom from "./Chatroom";
import PortalComponent from "../PortalComponent";

const ForAuthUser: React.FC = () => {
  return (
    <>
      <Chatroom />
      <MainPage />
      <PortalComponent />
      <Emojis />
    </>
  );
};

export default ForAuthUser;
