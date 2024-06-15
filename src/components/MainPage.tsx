import { Avatar } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { GrEmoji } from "react-icons/gr";
import { RxPencil1 } from "react-icons/rx";
import { VscSend } from "react-icons/vsc";

const MainPage: React.FC = () => {
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
      <div className="pt-12 px-5">
        <div className="flex place-items-center	">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            size="sm"
          />
          <p className="font-medium px-2">Sadjat</p>
          <RxPencil1 className="text-gray-500" />
          <p className="px-1 text-gray-500">Edited</p>
          <p className="text-gray-500">22:22</p>
        </div>
        <div className="mt-3">
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-chatbubble rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm py-2.5 text-gray-900 dark:text-white font-medium	">
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-gray-500">22:22</p>
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-chatbubble rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-medium py-2.5 text-gray-900 dark:text-white">
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
          </div>
          <div className="py-3 flex items-center text-sm text-gray-500 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
            Today
          </div>
          <div className="flex place-items-center	">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="sm"
            />
            <p className="font-medium px-2">Sadjat</p>
            <p className="text-gray-500">22:22</p>
          </div>
          <div className="mt-3">
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-chatbubble rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <p className="text-sm py-2.5 text-gray-900 dark:text-white font-medium	">
                That's awesome. I think our users will really appreciate the
                improvements.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse place-items-center	mt-3 place-content-end">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              size="sm"
            />
            <p className="text-gray-500 px-2">22:22</p>
          </div>
          <div className="mt-3 flex place-content-end">
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-userbubble rounded-b-xl rounded-s-xl dark:bg-gray-700">
              <p className="text-sm py-2.5 text-gray-900 dark:text-white font-medium	">
                That's awesome. I think our users will really appreciate the
                improvements.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse place-items-center	mt-3 place-content-end"></div>
          <div className="mt-3 flex place-content-end">
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-userbubble rounded-b-xl rounded-s-xl dark:bg-gray-700">
              <p className="text-sm py-2.5 text-gray-900 dark:text-white font-medium	">
                That's awesome. I think our users will really appreciate the
                improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full my-4 px-2">
        <div className="flex items-center">
          <input
            className="w-full place-content-center px-11 py-2 border-2	 rounded-xl relative"
            placeholder="Type Here..."
            type="text"
          />
          <div className="flex justify-between absolute left-0 px-3 w-full">
            <GrEmoji className="size-8 text-gray-400 cursor-pointer" />
            <div className="flex justify-around basis-1/6">
              <CiCirclePlus className="size-7 text-gray-400" />
              <VscSend className="size-7 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
