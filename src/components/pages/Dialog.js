import React from 'react';
import "../../assets/styles/dialog.css";


const Dialog = ({ isOpen, onClose, imageSrc }) => {
  return (
    <>
    {
      isOpen && (
      <div className="dialog-container">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="dialog-content">
          <img src={imageSrc} alt="Image" />
        </div>
      </div>
    )}
    </>
  );
};

export default Dialog;
