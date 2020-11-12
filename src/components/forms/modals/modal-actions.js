import store from "../../../store";

export const closeModalDispatch = () => {
  store.dispatch({ type: "CLOSE_MODAL" });
};

export const showModalForPostDispatch = (post) => {
  store.dispatch({
    type: "SHOW_MODAL_FOR_POST",
    payload: post,
  });
};
