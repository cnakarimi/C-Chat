import React, { useEffect, useState } from "react";
import Emojis from "./Emojis";
import MainPage from "./MainPage";
import Chatroom from "./Chatroom";
import PortalComponent from "../PortalComponent";

const ForAuthUser: React.FC<string> = () => {
  return (
    <>
      <Chatroom />
      <MainPage />
      <PortalComponent />
    </>
  );
};

export default ForAuthUser;
