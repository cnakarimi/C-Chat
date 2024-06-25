import React from "react";
import Menu from "../components/Menu";
import Chatroom from "../components/Chatroom";
import Emojis from "../components/Emojis";
import MainPage from "../components/MainPage";
import "../App.scss";

const Home: React.FC = () => {
  return (
    <div className="w-full lg:h-screen flex">
      <Menu />
      <Chatroom />
      <MainPage />
      <Emojis />
    </div>
  );
};

export default Home;
