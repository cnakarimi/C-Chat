import React, { useState } from "react";
import Menu from "../components/Menu";
import "../App.scss";
import ForAuthUser from "../components/ForAuthUser";
import Welcome from "./Welcome";
import { useSignInContext } from "../components/context/SignIn";

const Home: React.FC = () => {
  const { isSignIn } = useSignInContext();

  return (
    <div className="w-full h-screen flex">
      <Menu />
      {!isSignIn ? <Welcome /> : <ForAuthUser />}
    </div>
  );
};

export default Home;
