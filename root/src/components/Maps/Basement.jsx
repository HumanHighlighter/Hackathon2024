import './Maps.css';
import basement from './basement.png';
import Modal from './Modal.jsx';
import { useState } from 'react';

export default function Basement() {
    // const [pts, setPts] = useState([]);
    const [active, setActive] = useState(false);


    return (
        <>
            <div className="img-container">
                <img src={basement} alt={"basement"} />
                {/* <div className="test"></div> */}
                <button onClick={() => setActive(!active)}>MODAL BUTTON</button>

                <Modal open={active} onClose={() => setActive(false)}>
                    hello world
                </Modal>
            </div>
        </>
    );
}
