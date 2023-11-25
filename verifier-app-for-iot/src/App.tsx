import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import { Web5Provider } from './provider/Web5Provider';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Web5Provider>
      <Home></Home>
      <ToastContainer />
    </Web5Provider>
  );
}

export default App;
