import EmojiPicker from "emoji-picker-react";
import { useMyContext } from "./context/EmojiToggler";

const Emojis: React.FC = () => {
  const { isOn } = useMyContext();
  return (
    <div className={`hidden lg:block ${isOn && "lg:hidden"}`}>
      <EmojiPicker height="100%" className="" />
    </div>
  );
};

export default Emojis;
