import { createSelector } from "reselect";
import store from "../../../store";

export const getPostsSelector = () => {
  const state = store.getState();
  return state.postForm.loadedPosts;
};

export const getPostsLoadingStatusSelector = () => {
  const state = store.getState();
  return state.postForm.isPostsLoading;
};

export const getSelectedPostsArraySelector = () => {
  const state = store.getState();
  return state.postForm.selectedPosts;
};

export const enrichLoadedPostsSelector = createSelector(
  getPostsSelector,
  (posts) => {
    if (posts.length > 0) {
      return posts.map((post) => {
        return {
          ...post,
          selected: post.selected === undefined ? false : post.selected,
        };
      });
    }
    return [];
  }
);

export const getSelectedPostsSelector = createSelector(
  enrichLoadedPostsSelector,
  (posts) => {
    if (posts.length > 0) {
      if (posts.filter((post) => post.selected).length > 0) {
        return posts.filter((post) => post.selected);
      }
    }
    return [];
  }
);
