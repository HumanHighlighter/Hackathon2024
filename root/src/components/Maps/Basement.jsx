import './Maps.css';
import basement from './basement.png';

export default function Basement() {
    return (
        <>
            <div className="img-container">
                <img src={basement} alt={"basement"} />
                <div className="test"></div>
            </div>
        </>
    );
}
