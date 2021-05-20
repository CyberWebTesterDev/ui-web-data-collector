import { createSelector } from 'reselect';

const getInitialFormValues = ({ VKenControlPanel }) =>
   VKenControlPanel.initialValues;
const getCurrentFormValues = ({ VKenControlPanel }) =>
   VKenControlPanel.currentValues;
export const getInitialFormValuesSelector = createSelector(
   getInitialFormValues,
   (values) => values,
);
export const getCurrentFormValuesSelector = createSelector(
   getCurrentFormValues,
   (values) => values,
);
export const getCurrentFavoriteCheckBoxValueSelector = createSelector(
   getCurrentFormValuesSelector,
   (currentValues) => {
      if (currentValues.length > 0) {
         const idx = currentValues.findIndex(
            (currentValue) => currentValue.fieldName == 'addToFavorite',
         );
         if (idx !== -1) {
            return currentValues.find(
               (currentValue) => currentValue.fieldName == 'addToFavorite',
            ).fieldValue;
         } else {
            return false;
         }
      } else {
         return false;
      }
   },
);
