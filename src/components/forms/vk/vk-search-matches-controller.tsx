import * as React from 'react';
import { DispatchProp, useDispatch, useSelector } from 'react-redux';
import { TSearchVKProfileMatchesProps } from './vk-types';
import {
  getNotNullLengthMatchesSelector,
  getVKMatchedProfiles,
  getVKRenderData,
  getVKSearchFormData,
} from './vk-selectors';

const VKSearchMatchedProfilesController = React.memo<TSearchVKProfileMatchesProps & DispatchProp>(
  (props) => {
    return (
        <div><h2>{props.searchForm.searchString}</h2></div>
    );
  },
);

export const VKSearchMatchedProfilesComponent = () => {
  const profileMatchesProps = {
    vkMatches: {
      matchedProfiles: useSelector(getVKMatchedProfiles),
      matchesLength: useSelector(getNotNullLengthMatchesSelector),
    },
    searchForm: useSelector(getVKSearchFormData),
    pageRenderDetails: useSelector(getVKRenderData),
  };

  const profileDispatchProps = {
    dispatch: useDispatch(),
  };

  return <VKSearchMatchedProfilesController {...profileMatchesProps} {...profileDispatchProps} />;
};