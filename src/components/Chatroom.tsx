import SearchBar from "./SearchBar";
import Chat from "../assets/Chat";
import { Avatar, Badge } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";
import { faker } from "@faker-js/faker";

const Chatroom: React.FC = () => {
  function createRandomUser(): User {
    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType(),
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
      <li className="flex items-center py-4 px-3 " id={user._id}>
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          size="lg"
        />
        <div className="flex flex-col justify-between mx-5 w-3/4 ">
          <p className="font-bold">{user.firstName}</p>
          <div className="flex place-content-between text-gray-400 font-semibold">
            <p>{user.discription}</p>
            <p className="">22:22</p>
          </div>
        </div>
      </li>
    );
  });
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
      <ul className="pt-5 overflow-y-auto">
        {usersInChat}
        <li className="flex items-center py-4">
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
        <li className="flex items-center rounded-l-lg	 inverted-border-radius  bg-chatbg py-4">
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
