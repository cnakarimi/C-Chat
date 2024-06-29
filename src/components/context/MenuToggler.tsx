import { createContext, useContext, useState } from "react";

interface MenuContextType {
  isOn: boolean;
  toggle: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};

export const MenuContextProvider: React.FC = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prev) => !prev);
    console.log(isOn);
  };
  return (
    <MenuContext.Provider value={{ isOn, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};
