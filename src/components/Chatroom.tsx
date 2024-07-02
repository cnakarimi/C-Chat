import SearchBar from "./SearchBar";
import Chat from "../assets/Chat";
import { Avatar, Badge } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";
import { NavLink, useParams } from "react-router-dom";
import { Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useMenuContext } from "./context/MenuToggler";
import users from "../Data";

const Chatroom: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isOn } = useMenuContext();
  const { id } = useParams<{ id: string }>();
  const paramsId = id?.slice(2);

  const usersInChat = users.map((user) => {
    return (
      <NavLink
        className={`flex items-center cursor-pointer py-4 px-3 rounded-l-lg	 ${
          user.id == paramsId && "inverted-border-radius bg-chatbg"
        }`}
        id={user.id}
        onClick={() => console.log(`${user.id} clicked`)}
        to={`/: ${user.id}`}
      >
        <Avatar src={user.avatar} className="w-8 h-8 sm:w-14 sm:h-14" />
        <div className="flex flex-col justify-between sm:mx-5 ml-2 w-3/4 ">
          <p className="font-bold">{user.firstName}</p>
          <div className="flex place-content-between 	 text-gray-400 font-semibold">
            <p>{user.firstName}</p>
            <p className="">22:22</p>
          </div>
        </div>
      </NavLink>
    );
  });

  const skeletonUsers = users.map(() => {
    return (
      <li className="max-w-[300px] w-full flex items-center gap-3 py-4 px-3">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </li>
    );
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });
  return (
    <p
      className={`bg-white lg:basis-4/12 basis-7/12 pl-2 pt-2 lg:pl-5 lg:pt-8 overflow-y-auto sm:block ${
        isOn ? "hidden" : "block"
      }`}
    >
      <SearchBar />
      <div className="flex justify-between lg:mx-5 lg:pt-9 pt-4">
        <div className="flex lg:w-7/12 w-9/12 justify-between">
          <p className="flex sm:text-sm">
            <Chat />
            All
          </p>
          <p className="flex">
            <Badge content="New" color="danger" size="sm" placement="top-right">
              <Chat />
            </Badge>
            <p className="lg:pl-3 sm:pl-5 text-sm">Unread</p>
          </p>
        </div>
        <CiCirclePlus className="size-7 text-gray-400" />
      </div>
      {isLoading ? (
        <ul className=" lg:basis-4/12 lg:pl-5 lg:pt-5 overflow-y-auto items-center">
          {skeletonUsers}
        </ul>
      ) : (
        <ul className="pt-5">{usersInChat}</ul>
      )}
    </p>
  );
};

export default Chatroom;
