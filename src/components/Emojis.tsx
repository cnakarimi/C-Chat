import EmojiPicker from "emoji-picker-react";
import { useAppSelector } from "../hooks";

const Emojis: React.FC = () => {
  const emojiState = useAppSelector((state) => state.emojis.toggler);
  console.log(emojiState);
  return (
    <div className={`${emojiState ? "" : "hidden"}`}>
      <EmojiPicker height="100%" />
    </div>
  );
};

export default Emojis;
