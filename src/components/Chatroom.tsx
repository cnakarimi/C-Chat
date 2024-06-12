import SearchBar from "./SearchBar";
import Chat from "../assets/Chat";
import { Avatar, Badge } from "@nextui-org/react";

const Chatroom: React.FC = () => {
  return (
    <p className="bg-slate-100 lg:basis-4/12 lg:px-6 lg:pt-4">
      <SearchBar />
      <div className="flex justify-between lg:mx-5 lg:pt-4">
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
        <span className="lg:w-7 lg:h-7 bg-emerald-500 rounded-full text-lg text-center cursor-pointer">
          +
        </span>
      </div>
      <ul className="pt-5">
        <li className="flex pt-4">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="lg"
          />
          <div className="flex flex-col justify-between mx-5 w-3/4">
            <p>Mamad</p>
            <div className="flex place-content-between	">
              <p>Text</p>
              <p className="">22:22</p>
            </div>
          </div>
        </li>
        <li className="flex pt-4">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="lg"
          />
          <div className="flex flex-col justify-between mx-5 w-3/4">
            <p>Mamad</p>
            <div className="flex place-content-between	">
              <p>Text</p>
              <p className="">22:22</p>
            </div>
          </div>
        </li>
        <li className="flex pt-4">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="lg"
          />
          <div className="flex flex-col justify-between mx-5 w-3/4">
            <p>Mamad</p>
            <div className="flex place-content-between	">
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
