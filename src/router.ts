import { createBrowserRouter, redirect } from 'react-router';
import App from './App';
import { SearchPage } from './pages/SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        loader: () => redirect('/search'),
      },
      {
        path: 'search',
        Component: SearchPage,
      },
    ],
  },
]);
