import { createSelector } from 'reselect';
import {
   TVKenControlPanel,
   TVKenControlPanelInitialValue,
} from './vk-info-panel-types';

const getInitialFormValues = ({
   VKenControlPanel,
}: TVKenControlPanel): TVKenControlPanelInitialValue[] =>
   VKenControlPanel.initialValues;

const getCurrentFormValues = ({ VKenControlPanel }: TVKenControlPanel): TVKenControlPanelInitialValue[] =>
   VKenControlPanel.currentValues;

export const getInitialFormValuesSelector = createSelector(
   getInitialFormValues,
   (values): TVKenControlPanelInitialValue[] => values,
);

export const getCurrentFormValuesSelector = createSelector(
   getCurrentFormValues,
   (values): TVKenControlPanelInitialValue[] => values,
);

export const getCurrentFavoriteCheckBoxValueSelector = createSelector(
   getCurrentFormValuesSelector,
   (currentValues) => {
      if (currentValues.length > 0) {
         const idx = currentValues.findIndex(
            (currentValue) => currentValue.fieldName === 'addToFavorite',
         );
         if (idx !== -1) {
            return currentValues.length > 0 && currentValues[0] !== undefined
               ? currentValues.find(
                    (
                       currentValue: TVKenControlPanelInitialValue = {
                          fieldName: 'default',
                       },
                    ) => currentValue.fieldName === 'addToFavorite',
                 )?.fieldValue
               : false;
         } else {
            return false;
         }
      } else {
         return false;
      }
   },
);
