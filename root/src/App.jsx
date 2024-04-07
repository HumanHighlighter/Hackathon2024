import './App.css'; 
import Dropdown from './components/Dropdown.jsx';
import Floor from './components/Maps/Floor.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <h1>BUBBLER</h1>
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dropdown />}>
              <Route path="b" element={
                <Floor fountainArr={[
                  {
                    x: "50px",
                    y: "-300px",
                    wing: "M",
                    floor: "B",
                    status: "Green",
                    quality: "3.2"
                  },
                  {
                    x: "100px",
                    y: "-100px",
                    wing: "E",
                    floor: "B",
                    status: "Red",
                    quality: "5"
                  }
                ]}
                img="/src/assets/basement.png"
                />}>
              </Route>
              <Route path="g" element={
                <Floor fountainArr={[
                  {
                    x: "100px",
                    y: "-80px",
                    wing: "A",
                    floor: "G",
                    status: "Yellow",
                    quality: "1.0"
                  }
                ]}
                img="/src/assets/ground.png"
                />}>
              </Route>
              <Route path="1" element={
                <Floor fountainArr={[]}
                img="/src/assets/first.png"
                />}>
              </Route>
              <Route path="2" element={
                <Floor fountainArr={[]}
                img="/src/assets/second.png"
                />}>
              </Route>
              <Route path="3" element={
                <Floor fountainArr={[]}
                img="/src/assets/third.png"
                />}>
              </Route>
              <Route path="4" element={
                <Floor fountainArr={[]}
                img="/src/assets/fourth.png"
                />}>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
