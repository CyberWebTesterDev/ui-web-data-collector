import React from "react";

const Spinner = ({ loaders }) => {
  if (loaders.isVisible) {
    return (
      <div className="b-popup">
        <div className="b-popup-content">
          Ожидание ответа от сервера <br/><span>{loaders.data.requestName}...</span>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return false;
};

export default Spinner;
