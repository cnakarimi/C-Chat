import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useMenuContext } from "./components/context/MenuToggler";

const PortalComponent: React.FC = () => {
  const { toggle, isOn } = useMenuContext();
  const protalContainer = document.getElementById("portal-container");

  if (!protalContainer) {
    return null; // Handle the case when the portal container is not found
  }

  return ReactDOM.createPortal(
    <>
      {!isOn ? (
        <div className="block absolute sm:hidden top-1/2">
          <AiOutlineRight
            className="bg-stone-400 text-white w-5 h-12 cursor-pointer"
            onClick={toggle}
          />
        </div>
      ) : (
        <div className="block absolute sm:hidden top-1/2 left-20">
          <AiOutlineLeft
            className="bg-stone-400 text-white w-5 h-12 cursor-pointer"
            onClick={toggle}
          />
        </div>
      )}
    </>,
    protalContainer
  );
};

export default PortalComponent;
