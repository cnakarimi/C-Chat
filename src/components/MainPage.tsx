import { Avatar } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GrEmoji } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";
import { faker } from "@faker-js/faker";
import { useMyContext } from "./context/EmojiToggler";
import { Virtuoso } from "react-virtuoso";
import { Spinner } from "@nextui-org/react";
import { useState, useEffect, useCallback, useContext } from "react";
import { MessageContext } from "../components/context/Messages";
import Message from "./interfaces/Message";
import { useParams } from "react-router-dom";
import users from "../Data";
import EmojiPicker, { Emoji } from "emoji-picker-react";

const MainPage: React.FC<{ emojis: string }> = (emojis) => {
  const { toggle } = useMyContext();
  const [messagesLoad, setMessagesLoad] = useState(false);
  const { addMessage } = useContext(MessageContext);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { _id } = useParams<{ _id: string }>();
  const { isOn } = useMyContext();
  const { id } = useParams();
  const paramsId = id?.slice(2);

  const sendMessage = (e) => {
    e.preventDefault();

    const now = new Date();
    let hours = now.getHours();
    // Check for special cases when hour is 0
    if (hours === 0) {
      hours = "00";
    }
    const minutes = now.getMinutes();
    const newMessage: Message = {
      id: Date.now().toString(),
      recipientId: paramsId ?? "",
      content: inputValue,
      dateSent: new Date(),
      timeSent: { hours, minutes },
      sender: "Me",
    };
    addMessage(newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue("");
  };

  // Save messages to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const loadMore = useCallback(() => {
    const timeout = setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages]);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    loadMore();
    setTimeout(() => {
      setMessagesLoad(true);
    }, 5000);
  }, [loadMore]);

  const selectedUser = users.find((user) => user.id === paramsId);

  const messagesToShow = messages.filter(
    (message) => message.recipientId === paramsId
  );

  useEffect(() => {
    if (emojis) {
      setInputValue((prevInputValue) => prevInputValue + emojis.emojis.emoji);
    }
  }, [emojis]);

  return (
    <div
      className={`lg:basis-6/12 basis-full ${
        isOn && "lg:basis-full"
      } h-full bg-chatbg flex flex-col relative`}
    >
      <header className="py-5 px-4 flex bg-white">
        <div className="flex basis-full	justify-between">
          <div className="flex">
            <Avatar
              src={selectedUser?.avatar}
              className="sm:w-14 sm:h-14 w-12 h-12"
            />
            <div className="flex flex-col place-content-between font-semibold px-4">
              <p className="sm:font-bold sm:text-base text-sm">
                {selectedUser?.firstName}
              </p>
              <p className="font-semibold text-gray-400 sm:text-base text-sm">
                Online
              </p>
            </div>
          </div>
          <div className="flex place-self-center justify-around basis-1/5">
            <CiSearch className="sm:size-8 size-5" />
            <BsThreeDotsVertical className="sm:size-8 size-5" />
          </div>
        </div>
      </header>

      <div className="pt-12 mb-32 px-5 overflow-y-auto">
        {messagesLoad ? (
          <Virtuoso
            style={{ height: 1000 }}
            data={messagesToShow}
            endReached={loadMore}
            increaseViewportBy={200}
            itemContent={(index, messagesToShow) => (
              <>
                <div
                  className="mt-3 flex place-content-end"
                  key={messagesToShow?.id}
                >
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-userbubble rounded-b-xl rounded-s-xl dark:bg-gray-700">
                    <p className="text-sm py-2.5 text-gray-900 dark:text-white font-medium	">
                      {messagesToShow?.content}
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex place-items-center">
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                      size="sm"
                    />
                    <p className="font-medium px-2">Sadjat</p>
                    <p className="text-gray-500">
                      {messagesToShow?.timeSent.hours} :
                      {messagesToShow?.timeSent.minutes}
                    </p>
                  </div>
                  <div className="mt-3" id={messagesToShow?.id}>
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-chatbubble rounded-e-xl rounded-es-xl dark:bg-gray-700">
                      <p className="text-sm py-2.5 text-gray-900 dark:text-white font-medium	">
                        {messagesToShow?.content}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          />
        ) : (
          <Spinner
            color="secondary"
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </div>
      <form
        className="absolute bottom-0 w-full py-4 px-2 bg-white justify-center"
        onSubmit={sendMessage}
      >
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
            type="text"
            id="text"
            value={inputValue}
            className="block w-full p-4 ps-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Here..."
            onChange={(e) => setInputValue(e.target.value)}
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
