import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './modal.css';
import PropTypes from "prop-types";
import ModalOverlay from './modal-overlay/modal-overlay';

export default function Modal ({children, onClose}) {
    const modalRoot = document.getElementById("react-modals");

    React.useEffect(() => {
        const escCloseModal = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', escCloseModal);
        return () => {
            document.removeEventListener('keydown', escCloseModal);
        }
    }, [onClose]);

    return ReactDOM.createPortal((
        <>
            <ModalOverlay onClose={onClose}/>
            <div className='modal'>
                <button onClick={onClose} className='close_button'>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </>
    ), modalRoot);
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}