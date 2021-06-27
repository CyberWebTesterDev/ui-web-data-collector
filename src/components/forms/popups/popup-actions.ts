import store from '../../../store';
import {
  IBasicActionObject,
  TPopUpActionFunction,
  TPopUpActionFunctionDispatch,
  TPopUpActionFunctionWithoutArgumentsDispatch,
  ACTIONS,
} from '../../../lib';

export const popupShow: TPopUpActionFunction = (
  className,
  text,
  duration,
): IBasicActionObject => {
  return {
    type: ACTIONS.POPUP_ACTIONS.POPUP_SHOW,
    payload: { text, duration, className },
  };
};

export const popupShowDispatch: TPopUpActionFunctionDispatch = (
  className,
  text,
  duration,
) => {
  store.dispatch({
    type: ACTIONS.POPUP_ACTIONS.POPUP_SHOW,
    payload: { text, duration, className },
  });
};

export const popupHide = (): IBasicActionObject => {
  return {
    type: ACTIONS.POPUP_ACTIONS.POPUP_HIDE,
  };
};

export const popupHideDispatch: TPopUpActionFunctionWithoutArgumentsDispatch = () => {
  store.dispatch({
    type: ACTIONS.POPUP_ACTIONS.POPUP_HIDE,
  });
};
