import './Dropdown.css';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Dropdown() {
    return (
        <div className="dropdown">
            <button className="dropbtn">Select a floor</button>
            <div className="dropdown-content">
                <a href="1">Basement</a>
            </div>
        </div>
    );
}