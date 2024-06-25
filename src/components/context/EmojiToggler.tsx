import { createContext, useContext, useState } from "react";

interface MyContextType {
  isOn: boolean;
  toggle: () => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error(
      "useToggleContext must be used within a ToggleContextProvider"
    );
  }
  return context;
};

export const MyContextProvider: React.FC = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <MyContext.Provider value={{ isOn, toggle }}>{children}</MyContext.Provider>
  );
};
