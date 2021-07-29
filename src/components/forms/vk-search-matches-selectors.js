import { createSelector } from 'reselect';
import { countNonNullElementsInArray } from '../../services/helper';

export const getMatchesSelector = (state) => state.vkMatches.matchedProfiles;

export const getNotNullLengthMatchesSelector = createSelector(
  getMatchesSelector,
  (matches) => countNonNullElementsInArray(matches),
);
