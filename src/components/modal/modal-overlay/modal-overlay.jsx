import React from 'react';
import './modal-overlay.css';
import PropTypes from "prop-types";

export default function ModalOverlay ({onClose}) {
    return (
        <div className='overlay' onClick={onClose}/>
    );
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}