import { contacts } from '@/db/contacts';

const ContactList = () => {
  return (
    <div className="overflow-y-auto">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="cursor-pointer border-b border-gray-800 p-4 transition hover:bg-gray-800"
        >
          <div className="flex items-center gap-3">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="h-12 w-12 rounded-full"
            />

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{contact.name}</h2>

                <span
                  className={`h-3 w-3 rounded-full ${
                    contact.online ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                />
              </div>

              <p className="truncate text-sm text-gray-400">
                {contact.lastMessage}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;