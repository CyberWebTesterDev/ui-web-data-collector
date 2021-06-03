import * as React from 'react';
import { TPopupWindowCenter } from './popup-types'; 

export const PopupWindowCenter = (props: TPopupWindowCenter) => {
   return (
      <div className={props.className} id="popUpContTest">
         <div id="popupTextHolder">{props.text}</div>
      </div>
   );
};
