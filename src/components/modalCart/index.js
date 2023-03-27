import React from "react";
import ReactDOM from "react-dom";
import Styles from "./ModalCart.module.css"

function Modal({ type, children }) {
    console.log(type)
    if (type === "Alert") {
        return ReactDOM.createPortal(
            <div className={Styles.containerAlert}>
                {children}
            </div>,
            document.getElementById('portal')
        )
    } else if ("Cart") {
        return ReactDOM.createPortal(
            <div className={Styles.containerCart}>
                {children}
            </div>,
            document.getElementById('portal')
        )
    }
}


export default Modal;