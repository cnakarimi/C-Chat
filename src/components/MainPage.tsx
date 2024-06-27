import { Avatar } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GrEmoji } from "react-icons/gr";
import { RxPencil1 } from "react-icons/rx";
import { VscSend } from "react-icons/vsc";
import { faker } from "@faker-js/faker";
import { useMyContext } from "./context/EmojiToggler";
import { useParams } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";
import { useState, useEffect, useCallback } from "react";

interface User {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: string;
  message: string;
  subscriptionTier: "free" | "basic" | "business";
}

const MainPage: React.FC = () => {
  const { userId } = useParams();
  console.log(userId);
  const { toggle } = useMyContext();
  const [users, setUsers] = useState<User[]>([]);

  console.log(createRandomUser());

  const loadMore = useCallback(() => {
    const timeout = setTimeout(() => {
      setUsers((prevUsers) => [...prevUsers, createRandomUser()]);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  function createRandomUser(): User {
    // Your faker logic here
    // ...

    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType(),
      message: faker.lorem.paragraph(),
      subscriptionTier: faker.helpers.arrayElement([
        "free",
        "basic",
        "business",
      ]),
    };
  }

  return (
    <div className="lg:basis-6/12 h-full bg-chatbg flex flex-col relative">
      <header className="py-5 px-4 flex bg-white">
        <div className="flex basis-full	justify-between">
          <div className="flex">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="lg"
            />
            <div className="flex flex-col place-content-between font-semibold px-4">
              <p className="font-bold">Mamad</p>
              <p className="font-semibold text-gray-400">Online</p>
            </div>
          </div>
          <div className="flex place-self-center justify-around basis-1/5">
            <CiSearch className="lg:size-8" />
            <BsThreeDotsVertical className="lg:size-8" />
          </div>
        </div>
      </header>
      <div className="pt-12 mb-32 px-5 overflow-y-auto">
        <div className="flex place-items-center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            size="sm"
          />
          <p className="font-medium px-2">Sadjat</p>
          <RxPencil1 className="text-gray-500" />
          <p className="px-1 text-gray-500">Edited</p>
          <p className="text-gray-500">22:22</p>
        </div>
        <Virtuoso
          style={{ height: 1000 }}
          data={users}
          endReached={loadMore}
          increaseViewportBy={200}
          itemContent={(_, user) => (
            <div className="mt-3" id={user._id}>
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-chatbubble rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <p className="text-sm py-2.5 text-gray-900 dark:text-white font-medium	">
                  {user.message}
                </p>
              </div>
            </div>
          )}
        />
      </div>
      <form className="absolute bottom-0 w-full py-4 px-2 bg-white justify-center">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
            <GrEmoji
              className="size-8 text-gray-400 cursor-pointer"
              onClick={toggle}
            />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Here..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-1/2 translate-y-1/2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <VscSend className="size-7 text-gray-400 justify-self-center	" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainPage;
