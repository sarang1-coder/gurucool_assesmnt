import React , {useEffect} from 'react';
import "../../assets/styles/dialog.css";


const Dialog = ({ isOpen, onClose, imageSrc,title,likes }) => {

  console.log('title',title)

  return (
    <>
    {
      isOpen && (
        <div className="dialog-container">
          <button className="close-button" onClick={onClose}>
            CLOSE
          </button>
          <div className="dialog-content">
            <img src={imageSrc} alt="Image" />
             <h2>TITLE : {title}</h2>
             <h2>LIKES : {likes}</h2>
          </div>
        </div>
      )
    }
    </>
  );
};

export default Dialog;
