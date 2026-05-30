import { contacts } from '@/db/contacts';

const ContactList = () => {
  return (
    <div className="h-full overflow-y-auto">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="cursor-pointer border-b-0 border-gray-800 p-4 transition hover:bg-slate-800 rounded-lg mx-2 my-1">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="h-12 w-12 rounded-full object-cover"
              />

              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-gray-900 ${contact.online ? 'bg-emerald-500' : 'bg-gray-500'
                  }`}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h2 className="truncate font-semibold text-gray-100">
                  {contact.name}
                </h2>
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