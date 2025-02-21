import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
   <Sidebar />   
    </BrowserRouter>
  );
}

export default App;