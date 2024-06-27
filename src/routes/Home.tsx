import React from "react";
import Menu from "../components/Menu";

import "../App.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import ForAuthUser from "../components/ForAuthUser";
import { auth } from "../lib/firebase";

const Home: React.FC = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="w-full lg:h-screen flex">
      <Menu />
      <ForAuthUser />
    </div>
  );
};

export default Home;
