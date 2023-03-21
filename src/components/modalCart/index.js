import React from "react";
import ReactDOM from "react-dom";
import Styles from "./ModalCart.module.css"

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className={Styles.containerModal}>
            {children}
        </div>,
        document.getElementById('portal')
    )
}


export default Modal;