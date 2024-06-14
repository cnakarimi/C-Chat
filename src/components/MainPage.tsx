import { Avatar } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { PiPhoneCallLight, PiVideoCameraThin } from "react-icons/pi";

const MainPage: React.FC = () => {
  return (
    <div className="lg:basis-6/12 h-full bg-chatbg">
      <header className="py-5 px-4 flex bg-white">
        <div className="flex basis-full	justify-between">
          <div className="flex">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              size="lg"
            />
            <div className="flex flex-col place-content-between font-semibold px-4">
              <p className="font-bold">Mamad</p>
              <p className="font-semibold text-gray-400">Online</p>
            </div>
          </div>
          <div className="flex place-self-center justify-around basis-2/5">
            <CiSearch className="lg:size-8" />
            <PiPhoneCallLight className="lg:size-8" />
            <PiVideoCameraThin className="lg:size-8" />
            <BsThreeDotsVertical className="lg:size-8" />
          </div>
        </div>
      </header>
      <div className=""></div>
    </div>
  );
};

export default MainPage;
