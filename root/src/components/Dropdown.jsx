import './Dropdown.css';
import { Outlet, Link } from 'react-router-dom';

export default function Dropdown() {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">Select a floor</button>
                <div className="dropdown-content">
                    <Link to="/b">Basement</Link>
                </div>
            </div>

            {/* <div className="map-container"> */}
                <Outlet />
            {/* </div> */}
        </>
    );
}