import React from "react";
import Menu from "../components/Menu";
import Chatroom from "../components/Chatroom";
import Emojis from "../components/Emojis";
import MainPage from "../components/MainPage";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../App.scss";
import Welcome from "./Welcome";
import ForAuthUser from "../components/ForAuthUser";

const Home: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="w-full lg:h-screen flex">
      <Menu />
      {!user ? <Welcome /> : <ForAuthUser />}
    </div>
  );
};

export default Home;
