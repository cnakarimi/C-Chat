import Picker from "emoji-picker-react";
import { useMyContext } from "./context/EmojiToggler";
import EmojiProps from "./interfaces/Emojis";
import { SetStateAction, useState } from "react";

const Emojis: React.FC = ({ addEmojiToText }) => {
  return (
    <Picker
      height="100%"
      searchDisabled={true}
      onEmojiClick={(emoji) => addEmojiToText(emoji.emoji)}
    />
  );
};

export default Emojis;
