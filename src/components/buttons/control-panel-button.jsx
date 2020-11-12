import React from "react";

export const ControlPanelButton = (props) => {
  return (
    <div id="controlPanel">
      <button className="btn-primary" onClick={() => props.handler()}>
        {props.buttonLabel}
      </button>
    </div>
  );
};
