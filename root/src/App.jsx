import './App.css'; 
import Dropdown from './components/Dropdown.jsx';
import Basement from './components/Maps/Basement.jsx';
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
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
