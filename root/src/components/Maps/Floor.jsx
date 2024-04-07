import './Maps.css';
import Modal from './Modal.jsx';
import { useState } from 'react';


export default function Floor({ fountainArr, img }) {
    const [activeStates, setActiveStates] = useState(new Array(fountainArr.length).fill(false));

    const handleButtonClick = (index) => {
        const newActiveStates = [...activeStates];
        newActiveStates[index] = true;
        setActiveStates(newActiveStates);
    };

    return (
        <div className="img-container">
            <img src={img} />

            {fountainArr.map((fountain, i) => 
                <div key={i}>
                    <button className="pt" style={{ transform: `translate(${fountain.x}, ${fountain.y}` }} onClick={() => handleButtonClick(i)}></button>

                    <Modal 
                        open={activeStates[i]} 
                        onClose={() => {
                            const newActiveStates = [...activeStates];
                            newActiveStates[i] = false;
                            setActiveStates(newActiveStates);
                        }} 
                        wing={fountain.wing}
                        floor={fountain.floor}
                        status={fountain.status}
                        quality={fountain.quality}
                    />
                </div>
            )}
        </div>
    );
}
