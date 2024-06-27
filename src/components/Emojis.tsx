import EmojiPicker from "emoji-picker-react";
import { useMyContext } from "./context/EmojiToggler";

const Emojis: React.FC = () => {
  const { isOn } = useMyContext();
  return (
    <div className={`${isOn && "hidden"}`}>
      <EmojiPicker height="100%" className="" />
    </div>
  );
};

export default Emojis;
