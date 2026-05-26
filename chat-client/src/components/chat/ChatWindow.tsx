import type { Message } from '@/types/message.types';

import ChatMessageBubble from './ChatMessageBubble';

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  return (
    <section className="flex-1 overflow-y-auto bg-gray-950 p-6">
      <div className="space-y-4">
        {messages.map((message) => (
          <ChatMessageBubble key={message.id} message={message} />
        ))}
      </div>
    </section>
  );
};

export default ChatWindow;