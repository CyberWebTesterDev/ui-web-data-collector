import { createSelector } from 'reselect';
import { counterNotNull } from '../../services/helper';

export const getMatchesSelector = (state) => state.vkMatches.matchedProfiles;
export const getNotNullLengthMatchesSelector = createSelector(
   getMatchesSelector,
   (matches) => counterNotNull(matches),
);
