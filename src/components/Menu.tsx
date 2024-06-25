import { AiOutlineUser, AiTwotoneShop } from "react-icons/ai";
import BriefCase from "../assets/Briefcase";
import Home from "../assets/Home";
import User from "../assets/User";
import ChatBubble from "../assets/chat-bubble";
import { Avatar, Badge } from "@nextui-org/react";
import { PiBriefcase, PiChatTeardropTextFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
  // I should add pr-2 to every div when it's clicked
  return (
    <p className="bg-indigo-700 lg:basis-1/12 w-full relative  flex flex-col  justify-between">
      <div className="flex flex-col items-center justify-around h-1/4 text-slate-100">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full rounded-none cursor-pointerpy-3 flex justify-center bg-white inverted-border-menu "
              : "w-full rounded-none cursor-pointerpy-3 flex justify-center "
          }
          to="/"
        >
          <PiChatTeardropTextFill className="lg:size-10 text-lightblue" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full rounded-none cursor-pointerpy-3 flex justify-center bg-white inverted-border-menu text-indigo-900"
              : "w-full rounded-none cursor-pointerpy-3 flex justify-center "
          }
          to="/shopping"
        >
          <AiTwotoneShop className="lg:size-10 w-full" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full rounded-none cursor-pointerpy-3 flex justify-center bg-white inverted-border-menu text-indigo-900"
              : "w-full rounded-none cursor-pointerpy-3 flex justify-center "
          }
          to="/profile"
        >
          <AiOutlineUser className="lg:size-10 " />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full rounded-none cursor-pointerpy-3 flex justify-center bg-white inverted-border-menu text-indigo-900"
              : "w-full rounded-none cursor-pointerpy-3 flex justify-center "
          }
          to="/works"
        >
          <PiBriefcase className="lg:size-10 " />
        </NavLink>
      </div>
      <div className="flex items-end justify-center">
        <Badge content="" color="success" shape="circle">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            className="lg:w-14 lg:h-14 relative"
          />
        </Badge>
      </div>
    </p>
  );
};

export default Menu;
