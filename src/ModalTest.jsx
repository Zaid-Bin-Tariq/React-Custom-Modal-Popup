import React from "react";
import App from "./App";
import { useState } from "react";
import "./App.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className="container">
      <button className="popup-button" onClick={handleToggleModalPopup}>
        Open Modal Popup
      </button>
      {showModalPopup && (
        <App onClose={onClose} body={<div>Customized Body</div>} />
      )}
    </div>
  );
};

export default ModalTest;
