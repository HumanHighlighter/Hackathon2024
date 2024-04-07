import './Dropdown.css';
import { Outlet, Link } from 'react-router-dom';

export default function Dropdown() {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">Select a floor</button>
                <div className="dropdown-content">
                    <Link to="/b">Basement</Link>
                    <Link to="/g">Ground</Link>
                    <Link to="/1">Floor 1</Link>
                    <Link to="/2">Floor 2</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}