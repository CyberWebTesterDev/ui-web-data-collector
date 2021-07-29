import { createSelector } from 'reselect';
import { countNonNullElementsInArray } from '../../../services/helper';
import { TVKState, TVKProfile } from './vk-types';
import { TState } from '../../../lib/ui-serv-main-lib';

const getVKState = (state: TState): TVKState => state.vkData;

export const getVKSearchFormData = createSelector(
  getVKState,
  (state: TVKState): TVKState['searchForm'] => state.searchForm,
);

export const getVKRenderData = createSelector(
  getVKState,
  (state: TVKState): {loading: boolean; error: boolean; showPopUp: boolean;} => state.pageRenderDetails,
);

export const getVKMatchedProfiles = createSelector(
  getVKState,
  (state: TVKState) => state.vkMatches.matchedProfiles,
);

export const getNotNullLengthMatchesSelector = createSelector(
  getVKMatchedProfiles,
  (matches: Array<TVKProfile | null>): number => countNonNullElementsInArray(matches),
);