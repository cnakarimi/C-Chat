import { AiOutlineUser, AiTwotoneShop } from "react-icons/ai";
import BriefCase from "../assets/Briefcase";
import Home from "../assets/Home";
import User from "../assets/User";
import ChatBubble from "../assets/chat-bubble";
import { Avatar, Badge } from "@nextui-org/react";
import { PiBriefcase, PiChatTeardropTextFill } from "react-icons/pi";

const Menu: React.FC = () => {
  // I should add pr-2 to every div when it's clicked
  return (
    <p className="bg-indigo-700 lg:basis-1/12 w-full relative  flex flex-col  justify-between">
      <div className="flex flex-col items-center justify-around h-1/4 text-slate-100">
        <div className="w-full rounded-none bg-white inverted-border-menu py-3 flex justify-center">
          <PiChatTeardropTextFill className="lg:size-14 text-lightblue" />
        </div>
        <div className="w-full rounded-none  py-3 flex justify-center">
          <AiTwotoneShop className="lg:size-14 w-full" />
        </div>
        <div className="w-full rounded-none  py-3  flex justify-center">
          <AiOutlineUser className="lg:size-14 " />
        </div>
        <div className="w-full py-3 rounded-none flex justify-center">
          <PiBriefcase className="lg:size-14 " />
        </div>
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
