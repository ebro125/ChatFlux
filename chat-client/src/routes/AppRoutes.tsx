import { createBrowserRouter } from 'react-router-dom';

import ChatLayout from '@/layouts/ChatLayout';
import ChatPage from '@/pages/ChatPage';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatLayout />,

    // Outlet-based routing architecture
    // Makes future backend/auth route separation easier.
    children: [
      {
        index: true,
        element: <ChatPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);