import ContactList from '@/components/chat/ContactList';

const AppSidebar = () => {
  return (
    <aside className="flex h-screen w-[390px] flex-col border-r border-slate-800 bg-slate-950">
      <div className="shrink-0 border-b-0 border-slate-800 p-4">
        <h1 className="text-2xl font-bold text-white">ChatFlux</h1>
      </div>

      <div className="flex-1 overflow-hidden ">
        <ContactList />
      </div>
    </aside>
  );
};

export default AppSidebar;