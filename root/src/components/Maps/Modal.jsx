import ReactDom from 'react-dom';

export default function Modal({ open, onClose, children }) {
    const modal_styles = {
        position: "absolute",
        top: "0px",
        left: "0px",
        transform: "translate(0px, 0px)",
        backgroundColor: "#FFF",
        padding: "50px",
        zIndex: 1000
    };

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div style={modal_styles}>
                <button onClick={onClose}>CLOSE MODAL</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    );
}