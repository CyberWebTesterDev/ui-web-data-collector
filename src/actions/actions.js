import store from '../store';

const moviesRequested = () => {
  return {
    type: 'FETCH_MOVIES_REQUEST',
  };
};

const moviesLoaded = (moviesLoad) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: moviesLoad,
  };
};

const moviesFailure = (err) => {
  return {
    type: 'FETCH_MOVIES_FAILURE',
    payload: err,
  };
};

const vkProfileDataRequseted = () => {
  return {
    type: 'FETCH_VK_PROFILE_REQUEST',
  };
};

const vkProfileDataLoaded = (profiledata) => {
  return {
    type: 'FETCH_VK_PROFILE_SUCCESS',
    payload: profiledata,
  };
};

const vkMatchProfilesMatchesRequested = () => {
  return {
    type: 'FETCH_VK_MATCH_PROFILE_REQUEST',
  };
};

const vkMatchProfilesMatchesError = (error) => {
  return {
    type: 'FETCH_VK_MATCH_PROFILE_ERROR',
    payload: error,
  };
};
const vkMatchProfilesMatchesLoaded = (matches) => {
  return {
    type: 'FETCH_VK_MATCH_PROFILE_SUCCESS',
    payload: matches,
  };
};

const vkMatchProfilesOnPickedYear = (targetValue) => {
  return {
    type: 'VK_MATCH_PROFILE_PICKED_YEAR',
    payload: targetValue,
  };
};

const vkMatchProfilesOnChangedAge = (targetValue) => {
  return {
    type: 'VK_MATCH_PROFILE_CHANGED_YEAR',
    payload: targetValue,
  };
};

const vkMatchSearchFormChange = (fieldName, targetValue) => {
  return {
    type: 'VK_MATCH_PROFILE_FORM_CHANGE',
    payload: { fieldName, targetValue },
  };
};

const vkValidateSearchForm = () => {
  return {
    type: 'VK_MATCH_PROFILE_FORM_VALIDATE',
  };
};

const vkSearchMatchProps = (searchprops) => {
  return {
    type: 'FETCH_VK_MATCH_SEARCH_PROPS',
    payload: searchprops,
  };
};
const showSpinner = (requestName) => {
  return {
    type: 'SHOW_SPINNER',
    payload: requestName,
  };
};

export const spinnerShowDispatch = (requestName) => {
  store.dispatch({
    type: 'SHOW_SPINNER',
    payload: requestName,
  });
};
export const spinnerHideDispatch = () => {
  store.dispatch({
    type: 'HIDE_SPINNER',
  });
};

const hideSpinner = () => {
  return {
    type: 'HIDE_SPINNER',
  };
};

export {
  moviesRequested,
  moviesLoaded,
  moviesFailure,
  vkProfileDataRequseted,
  vkProfileDataLoaded,
  vkMatchProfilesMatchesLoaded,
  vkMatchProfilesMatchesRequested,
  vkMatchSearchFormChange,
  vkSearchMatchProps,
  vkValidateSearchForm,
  showSpinner,
  hideSpinner,
};
