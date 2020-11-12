import store from "../store";

export const postsLoadingStartDispatch = () => {
  store.dispatch({
    type: "FETCH_POSTS_START",
  });
};

export const postsLoaded = (posts) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
  };
};

export const postsError = () => {
  return {
    type: "FETCH_POSTS_ERROR",
  };
};

export const selectPostDispatch = (postId) => {
  store.dispatch({
    type: "SELECT_POST",
    payload: postId,
  });
};

export const cancelSelectPostDispatch = (postId) => {
  store.dispatch({
    type: "SELECT_CANCEL",
    payload: postId,
  });
};
