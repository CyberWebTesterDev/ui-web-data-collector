type TFormValue = {
  fieldName: string;
  fieldValue: string | boolean;
};

type TAction = {
  type: string;
  payload?: string | TFormValue;
};

export const selectFormName = (formName: string): TAction => {
  return {
    type: "SELECT_FORM_NAME",
    payload: formName,
  };
};

export const updateFormValue = (formValue: TFormValue): TAction => {
  return {
    type: "UPDATE_FORM_VALUE",
    payload: formValue,
  };
};

export const cleanForm = ():TAction => {
  return {
    type: 'CLEAN_FORM'
  }
}
