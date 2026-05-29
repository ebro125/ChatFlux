import type { Message } from '@/types/message.types';

interface ChatMessageBubbleProps {
  message: Message;
}

const ChatMessageBubble = ({ message }: ChatMessageBubbleProps) => {
  return (
    <div
      className={`flex ${
        message.isOwnMessage ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
          message.isOwnMessage
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800 text-white'
        }`}
      >
        <p>{message.content}</p>

        <span className="mt-1 block text-right text-xs text-gray-300">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default ChatMessageBubble;