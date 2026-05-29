import type { Contact } from '@/types/contact.types';

interface ChatHeaderProps {
  contact: Contact;
}

const ChatHeader = ({ contact }: ChatHeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 bg-gray-900 p-4">
      <div className="flex items-center gap-3">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="h-12 w-12 rounded-full"
        />

        <div>
          <h2 className="font-semibold">{contact.name}</h2>

          <p className="text-sm text-gray-400">
            {contact.online ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;