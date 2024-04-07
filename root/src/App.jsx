import './App.css'; 
import Dropdown from './components/Dropdown.jsx';
import FloorMap from './components/FloorMap.jsx';

function App() {

  return (
    <div id="container">
      <h1>BUBBLER</h1>
      <Dropdown />
      <FloorMap />
    </div>
  );
}

export default App;
