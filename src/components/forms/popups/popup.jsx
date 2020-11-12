import React from "react";

export const PopupWindowCenter = (props) => {
  return (
    <div className={props.className} id="popUpContTest">
      <div id="popupTextHolder">{props.text}</div>
    </div>
  );
};
