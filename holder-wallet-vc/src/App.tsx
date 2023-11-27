import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { router } from './routes';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={10000} />
    </>
  );
};

export default App;
