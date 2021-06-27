import store from '../../../store';

type TDispatch = () => void;

export const closeModalDispatch: TDispatch = () => {
  store.dispatch({ type: 'CLOSE_MODAL' });
};
export const showModalForPostDispatch = (post: string): void => {
  store.dispatch({
    type: 'SHOW_MODAL_FOR_POST',
    payload: post,
  });
};
