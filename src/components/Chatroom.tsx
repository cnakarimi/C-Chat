import SearchBar from "./SearchBar";
import Chat from "../assets/Chat";
import { Avatar, Badge } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";
import { faker } from "@faker-js/faker";
import { NavLink } from "react-router-dom";
import { Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useMenuContext } from "./context/MenuToggler";

const Chatroom: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isOn } = useMenuContext();
  function createRandomUser(): User {
    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType(),
      message: faker.lorem.lines(),
      subscriptionTier: faker.helpers.arrayElement([
        "free",
        "basic",
        "business",
      ]),
    };
  }

  const user = createRandomUser();
  const user1 = createRandomUser();
  const user2 = createRandomUser();
  const user3 = createRandomUser();
  const user4 = createRandomUser();
  const user5 = createRandomUser();
  const user6 = createRandomUser();
  const user7 = createRandomUser();
  const user8 = createRandomUser();
  const user9 = createRandomUser();
  const user10 = createRandomUser();
  const users = [
    user,
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
  ];

  const usersInChat = users.map((user) => {
    return (
      <NavLink
        className="flex items-center cursor-pointer py-4 px-3 rounded-l-lg	 inverted-border-radius  bg-chatbg"
        id={user._id}
        onClick={() => console.log(`${user._id} clicked`)}
        to={`/:${user._id}`}
      >
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          className="w-8 h-8 sm:w-14 sm:h-14"
        />
        <div className="flex flex-col justify-between sm:mx-5 ml-2 w-3/4 ">
          <p className="font-bold">{user.firstName}</p>
          <div className="flex place-content-between 	 text-gray-400 font-semibold">
            <p>{user.sex}</p>
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
