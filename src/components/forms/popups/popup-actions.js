import store from '../../../store';

export const popupShow = (className, text, duration) => {
   return {
      type: 'POPUP_SHOW',
      payload: { text, duration, className },
   };
};
export const popupShowDispatch = (className, text, duration) => {
   store.dispatch({
      type: 'POPUP_SHOW',
      payload: { text, duration, className },
   });
};
export const popupHide = () => {
   return {
      type: 'POPUP_HIDE',
   };
};
export const popupHideDispatch = () => {
   store.dispatch({
      type: 'POPUP_HIDE',
   });
};
