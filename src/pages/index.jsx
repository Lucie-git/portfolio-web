import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { App } from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { About } from '../components/About/About';
import { Projects } from '../components/Projects/Projects';
import { Contacts } from '../components/Contacts/Contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
]);

document.querySelector('#root').innerHTML = render(<RouterProvider router={router} />);
