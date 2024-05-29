import { useState } from "react";
import "./App.css";

function App({ id, header, body, footer, onClose }) {
  return (
    <>
      <div id={id || "Modal"} className="modal">
        <div className="content">
          <div className="header">
            <h2 className="heading">{header ? header : "Header"}</h2>
            <span onClick={onClose} className="close-modal-icon">
              &times;
            </span>
          </div>
          <div className="body">
            <div className="body-text">
              {body ? body : <div>This is our Modal Body</div>}
            </div>
          </div>
          <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
        </div>
      </div>
    </>
  );
}

export default App;
