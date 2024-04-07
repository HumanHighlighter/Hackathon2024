// from https://www.youtube.com/watch?v=LyLa7dU5tp8&ab_channel=WebDevSimplified

import ReactDom from 'react-dom';
import { useState } from 'react';
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

    const [editStatusOpen, setEditStatusOpen] = useState(false);
    const [editQualityOpen, setEditQualityOpen] = useState(false);

    const handleEditStatus = () => {
        setEditStatusOpen(!editStatusOpen);
    }

    const handleEditQuality = () => {
        setEditQualityOpen(!editQualityOpen);
    }

    // PLUGIN: update status
    const updateStatus = () => {
        console.log('status edited');
    }

    return ReactDom.createPortal(
        <>
            <div style={overlay_styles}></div>
            <div style={modal_styles}>
                <img className="x-svg" src={svg} alt={"CLOSE"} onClick={() => onClose()}/>
                <div className="modal-info">
                    <p>{wing} wing, Floor {floor}</p>
                    <span className="status-container">
                        <p className="edit-status-p" onClick={() => handleEditStatus()}>Status:</p>
                        <p>{status}</p>
                    </span>
                    <p>Quality: {quality}/5</p>
                    <div className="status-edit-div" style={{ display: editStatusOpen ? "block" : "none" }}>
                        <p>Edit Status:</p>
                        <button onClick={() => updateStatus()}>Broken</button>
                        <button onClick={() => updateStatus()}>Red</button>
                        <button onClick={() => updateStatus()}>Yellow</button>
                        <button onClick={() => updateStatus()}>Green</button>
                    </div>
                    <div className="quality-edit-div">
                        
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}