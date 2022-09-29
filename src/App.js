// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './view/Home'
import Dashboard from './view/Dashboard'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
