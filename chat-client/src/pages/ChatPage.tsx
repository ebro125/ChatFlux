import { contacts } from '@/db/contacts';

import ChatHeader from '@/components/chat/ChatHeader';
import ChatInput from '@/components/chat/ChatInput';
import ChatWindow from '@/components/chat/ChatWindow';

const ChatPage = () => {
  // Temporary static selected contact.
  // Later this will come from route params or global state.
  const selectedContact = contacts[0];

  return (
    <div className="flex h-screen flex-col">
      <ChatHeader contact={selectedContact} />

      <ChatWindow messages={selectedContact.messages} />

      <ChatInput />
    </div>
  );
};

export default ChatPage;