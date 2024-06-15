import EmojiPicker from "emoji-picker-react";

const handleEmojiClick = (emoji: any) => {
  // Handle the selected emoji
  console.log("Selected emoji:", emoji);
};
const Emojis: React.FC = () => {
  return (
    <div>
      <EmojiPicker height="100%" onEmojiClick={handleEmojiClick} />
    </div>
  );
};

export default Emojis;
