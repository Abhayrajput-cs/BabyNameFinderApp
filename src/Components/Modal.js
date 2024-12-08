import React from 'react';
import '../styles/Modal.css';

function Modal({ isOpen, name, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>You have selected the name: <strong>{name}</strong></p>
        <button className="modal-button" onClick={onClose}>Close</button>
        <button className="modal-button delete-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Modal;
