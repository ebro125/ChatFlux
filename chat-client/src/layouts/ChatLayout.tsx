import { Outlet } from 'react-router-dom';

import AppSidebar from '@/components/layout/AppSidebar';

const ChatLayout = () => {
  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Sidebar section */}
      <AppSidebar />

      {/* Main content rendered via Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default ChatLayout;