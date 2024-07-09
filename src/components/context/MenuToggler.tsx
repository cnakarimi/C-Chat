import { createContext, useContext, useState } from "react";

interface MenuContextType {
  menuIsOn: boolean;
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
  const [menuIsOn, setMenuIsOn] = useState(false);

  const toggle = () => {
    setMenuIsOn((prev) => !prev);
    console.log(menuIsOn);
  };
  return (
    <MenuContext.Provider value={{ menuIsOn, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};
