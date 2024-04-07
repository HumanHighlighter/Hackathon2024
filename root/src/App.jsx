import './App.css'; 
import Dropdown from './components/Dropdown.jsx';
import Basement from './components/Maps/Basement.jsx';
import Ground from './components/Maps/Ground.jsx';
import First from './components/Maps/First.jsx';
import Second from './components/Maps/Second.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <h1>BUBBLER</h1>
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dropdown />}>
              <Route path="b" element={<Basement />} />
              <Route path="g" element={<Ground />} />
              <Route path="1" element={<First />} />
              <Route path="2" element={<Second />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
