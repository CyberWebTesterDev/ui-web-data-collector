import { TAction, TFormValue } from '../profile-enrichment/vk-info-panel-types';

export const selectFormName = (formName: string): TAction => {
  return {
    type: 'SELECT_FORM_NAME',
    payload: formName,
  };
};

export const updateFormValue = (
  caller: string,
  formValue: TFormValue,
): TAction => {
  console.log(`Action creator updateFormValue has been called by ${caller}`);
  return {
    type: 'UPDATE_FORM_VALUE',
    payload: formValue,
  };
};

export const cleanForm = (): TAction => {
  return {
    type: 'CLEAN_FORM',
  };
};
