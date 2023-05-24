import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StateBasic from './components/StateBasic';
import Firstfile from './components/Firstfile';
import Ict from './components/Ict';
import Naviigation from './components/Naviigation';
import ApiGet from './components/ApiGet';


function App() {
  return (
    <div className="App">
      <Naviigation/>
      <br /><br />
    <Routes>
      <Route path='/' element={<StateBasic/>}/>
      <Route path='/first' element={<Firstfile/>}/>
      <Route path='/ict' element={<Ict/>}/>
      <Route path='/axios' element={<ApiGet/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
