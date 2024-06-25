import { Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const Welcome: React.FC = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="flex flex-col justify-center">
      <div>Welcome!</div>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        onClick={googleSignIn}
      >
        SignIn
      </Button>
    </div>
  );
};

export default Welcome;
