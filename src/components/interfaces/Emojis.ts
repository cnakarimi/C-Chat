import { EmojiClickData } from "emoji-picker-react";

interface EmojiProps {
  onEmojyData: (unified: string) => void;
  (emojiData: EmojiClickData, event: MouseEvent): void;
}

export default EmojiProps;
