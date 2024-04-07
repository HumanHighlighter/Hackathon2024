import './Maps.css';
import ground from './ground.png';

export default function Ground() {


    return (
        <>
            <div className="img-container">
                <img src={ground} alt={"ground"} />
                {/* <div className="test"></div> */}
            </div>
        </>
    );
}
