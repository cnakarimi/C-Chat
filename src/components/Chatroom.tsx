import SearchBar from "./SearchBar";
import Chat from "../assets/Chat";
import { Avatar, Badge } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";

const Chatroom: React.FC = () => {
  return (
    <p className="bg-white lg:basis-4/12 lg:pl-5 lg:pt-8">
      <SearchBar />
      <div className="flex justify-between lg:mx-5 lg:pt-9">
        <div className="flex lg:w-7/12 justify-between">
          <p className="flex">
            <Chat />
            All
          </p>
          <p className="flex">
            <Badge content="New" color="danger" size="sm" placement="top-right">
              <Chat />
            </Badge>
            <p className="pl-3">Unread</p>
          </p>
        </div>
        <CiCirclePlus className="size-7 text-gray-400" />
      </div>
      <ul className="pt-5">
        <li className="flex items-center py-4 px-3 rounded-l-lg  bg-chatbg">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            size="lg"
          />
          <div className="flex flex-col justify-between mx-5 w-3/4 ">
            <p className="font-bold">Sadjat</p>
            <div className="flex place-content-between text-gray-400 font-semibold">
              <p>Tedhfgwehf</p>
              <p className="">22:22</p>
            </div>
          </div>
        </li>
        <li className="flex items-center pt-4">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="lg"
          />
          <div className="flex flex-col justify-between mx-5 w-3/4">
            <p className="font-bold">Mamad</p>
            <div className="flex place-content-between	text-gray-400 font-semibold">
              <p>Text</p>
              <p className="">22:22</p>
            </div>
          </div>
        </li>
        <li className="flex items-center pt-4">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="lg"
          />
          <div className="flex flex-col justify-between mx-5 w-3/4">
            <p className="font-bold">Mamad</p>
            <div className="flex place-content-between	text-gray-400 font-semibold">
              <p>Text</p>
              <p className="">22:22</p>
            </div>
          </div>
        </li>
      </ul>
    </p>
  );
};

export default Chatroom;
