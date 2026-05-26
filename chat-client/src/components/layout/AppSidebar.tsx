import ContactList from '@/components/chat/ContactList';

const AppSidebar = () => {
  return (
    <aside className="w-[320px] border-r border-gray-800 bg-gray-900">
      <div className="border-b border-gray-800 p-4">
        <h1 className="text-2xl font-bold">ChatFlux</h1>
      </div>

      <ContactList />
    </aside>
  );
};

export default AppSidebar;