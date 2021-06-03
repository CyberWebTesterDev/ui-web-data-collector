import { IBasicActionObject, TPopUpActionFunction } from '../../../lib';

export type TPopupWindowCenter = {
   className: string;
   text: string;
};

export type TPopupControllerProps = {
   popups: {
      isVisible: boolean;
      duration: number;
      className: string;
      data: {
         text: string;
      };
   };
};

export type TPopupControllerDispatchProps = {
   popupHide: () => IBasicActionObject;
   popupShow: TPopUpActionFunction;
};
