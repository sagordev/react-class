import { useState } from 'react';
import './App.css';
import Dashboard from './main/Dashboard';
import TakaPai from './main/TakaPai';
function App() {
  const [hiseb, setHiseb] = useState([]);
  return (
    <div className='main'>
      <Dashboard hiseb={hiseb} setHiseb={setHiseb} />
    </div>
  );
}

export default App;
