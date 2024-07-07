import { createContext, useContext, useState } from "react";

interface SignInType {
  isSignIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

const signInContext = createContext<SignInType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useSignInContext = () => {
  const context = useContext(signInContext);
  if (!context) {
    throw new Error("fuck");
  }
  return context;
};

export const SignInProvider: React.FC = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const signIn = () => {
    setIsSignIn(true);
  };

  const signOut = () => {
    setIsSignIn(false);
  };

  return (
    <signInContext.Provider value={{ isSignIn, signIn, signOut }}>
      {children}
    </signInContext.Provider>
  );
};
