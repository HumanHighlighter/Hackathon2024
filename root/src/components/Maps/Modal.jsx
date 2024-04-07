// from https://www.youtube.com/watch?v=LyLa7dU5tp8&ab_channel=WebDevSimplified

import ReactDom from 'react-dom';
import './Modal.css';
import svg from './x-symbol-svgrepo-com.svg';

export default function Modal({ open, onClose, wing, floor, status, quality }) {
    const modal_styles = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#FFF",
        borderRadius: "6px",
        padding: "50px",
        paddingTop: "5px",
        zIndex: 1000
    };

    const overlay_styles = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0, 
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1000
    };

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div style={overlay_styles}></div>
            <div style={modal_styles}>
                <img className="x-svg" src={svg} alt={"CLOSE"} onClick={() => onClose()}/>
                <div className="modal-info">
                    <p>{wing} wing, Floor {floor}</p>
                    <p>Status: {status}</p>
                    <p>Quality: {quality}/5</p>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}