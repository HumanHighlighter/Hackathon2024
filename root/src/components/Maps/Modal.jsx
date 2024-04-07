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
        padding: "15px",
        paddingTop: "10px",
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
    const handleEditStatus = () => {
        setEditStatusOpen(!editStatusOpen);
    }
    const [savedStatus, setSavedStatus] = useState("");
    // PLUGIN: update status
    const updateStatus = (e) => {
        setSavedStatus(e.target.innerText);
    }

    const [editQualityOpen, setEditQualityOpen] = useState(false);
    const handleEditQuality = () => {
        setEditQualityOpen(!editQualityOpen);
    }
    const [inputQuality, setInputQuality] = useState("");
    const [savedQuality, setSavedQuality] = useState("");

    const handleInputQuality = (e) => {
        setInputQuality(e.target.value);
    };
    // PLUGIN: update quality
    const handleQualitySave = () => {
        setSavedQuality(inputQuality);
        setInputQuality(""); // clear after saving
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
                        <p>{savedStatus === "" ? status : savedStatus}</p>
                    </span>
                    <span className="quality-container">
                        <p className="edit-quality-p" onClick={() => handleEditQuality()}>Quality:</p>
                        <p>{savedQuality === "" ? quality : savedQuality}/5</p>
                    </span>
                    <div className="status-edit-div" style={{ display: editStatusOpen ? "block" : "none" }}>
                        <p>Edit Status:</p>
                        <button onClick={updateStatus}>Broken</button>
                        <button onClick={updateStatus}>Red</button>
                        <button onClick={updateStatus}>Yellow</button>
                        <button onClick={updateStatus}>Green</button>
                    </div>
                    <div className="quality-edit-div" style={{ display: editQualityOpen ? "block" : "none" }}>
                        <p>Edit Quality:</p>
                        <input type="text" value={inputQuality} onChange={handleInputQuality} placeholder="Enter new quality"/>
                        <button onClick={handleQualitySave}>Save</button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}