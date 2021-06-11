const initialState = {
  isPostsLoading: false,
  loadedPosts: [],
  selectedPosts: [],
  isPostsLoaded: false,
  hasErrorLoadingPosts: false,
};

export const postViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_START':
      return {
        ...state,
        isPostsLoading: true,
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        loadedPosts: action.payload,
        isPostsLoaded: true,
        isPostsLoading: false,
      };
    case 'FETCH_POSTS_ERROR':
      return {
        ...state,
        isPostsLoaded: false,
        hasErrorLoadingPosts: true,
      };
    case 'SELECT_POST':
      const idx = state.loadedPosts.findIndex(
        (post) => post.id == action.payload,
      );
      const postSelected =
        idx != -1 ? { ...state.loadedPosts[idx], selected: true } : null;
      const willReturnState = {
        ...state,
        loadedPosts: [
          ...state.loadedPosts.slice(0, idx),
          postSelected,
          ...state.loadedPosts.slice(idx + 1),
        ],
      };
      return postSelected
        ? {
            ...state,
            loadedPosts: [
              ...state.loadedPosts.slice(0, idx),
              postSelected,
              ...state.loadedPosts.slice(idx + 1),
            ],
          }
        : { ...state };
    case 'SELECT_CANCEL':
      const idx2 = state.loadedPosts.findIndex(
        (post) => post.id == action.payload,
      );
      const postRemoved =
        idx2 != -1 ? { ...state.loadedPosts[idx2], selected: false } : null;
      return postRemoved
        ? {
            ...state,
            loadedPosts: [
              ...state.loadedPosts.slice(0, idx2),
              postRemoved,
              ...state.loadedPosts.slice(idx2 + 1),
            ],
          }
        : { ...state };
    default:
      return {
        ...state,
      };
  }
};
