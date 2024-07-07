import Picker from "emoji-picker-react";
import { useMyContext } from "./context/EmojiToggler";
import EmojiProps from "./interfaces/Emojis";
import { SetStateAction, useState } from "react";

const Emojis: React.FC<EmojiProps> = ({ onEmojiData }) => {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const { isOn } = useMyContext();
  const sendSelectedEmoji = (emojiObject: SetStateAction<null>) => {
    setChosenEmoji(emojiObject);
    onEmojiData(chosenEmoji);
  };
  return (
    <form className={`hidden lg:block ${isOn && "lg:hidden"}`}>
      <Picker height="100%" className="" onEmojiClick={sendSelectedEmoji} />
    </form>
  );
};

export default Emojis;
