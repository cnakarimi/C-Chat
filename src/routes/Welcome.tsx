import { Button } from "@nextui-org/react";
import React from "react";
import { useSignInContext } from "../components/context/SignIn";

const Welcome: React.FC = () => {
  const { signIn } = useSignInContext();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>Welcome!</div>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-10"
        onClick={signIn}
      >
        SignIn
      </Button>
    </div>
  );
};

export default Welcome;
