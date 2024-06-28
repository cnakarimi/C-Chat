import React, { useState } from "react";
import Menu from "../components/Menu";
import "../App.scss";
import ForAuthUser from "../components/ForAuthUser";
import Welcome from "./Welcome";

const Home: React.FC = () => {
  const [user, setUser] = useState(false);
  const UserSignedIn = () => {
    setUser(true);
  };

  return (
    <div className="w-full lg:h-screen flex">
      <Menu />
      {!user ? <Welcome signIn={UserSignedIn} /> : <ForAuthUser />}
    </div>
  );
};

export default Home;
