import './Maps.css';
import basement from './basement.png';
import Modal from './Modal.jsx';
import { useState } from 'react';


export default function Basement() {


    // const [pts, setPts] = useState([]);
    const [active, setActive] = useState(false);

    const pt_pos = {
        transform: "translate(50px, -60px)"
    };


    return (
        <>
            <div className="img-container">
                <img src={basement} alt={"basement"} />
                <button className="pt" style={pt_pos} onClick={() => setActive(true)}></button>

                <Modal 
                    open={active} 
                    onClose={() => setActive(false)} 
                    wing="M"
                    floor="2"
                    status="Green"
                    quality="3.2"
                />
            </div>
        </>
    );
}
