type TFormActionObject = {
  type: string
  payload: TInitialVal;
}

type TInitialVal = {
  fieldName: string;
  fieldValue: string | boolean;
};

type TInitialForm = {
  isFormChanged: boolean;
  initialValues: TInitialVal[];
  currentValues: TInitialVal[];
};

type TInitialStateForm = {
  VKenControlPanel: TInitialForm;
};

const initialFormValues = {
  isFormChanged: false,
  initialValues: [
    {
      fieldName: 'addToFavorite',
      fieldValue: false,
    },
    {
      fieldName: 'yearPicker',
      fieldValue: '',
    },
  ],
  currentValues: new Array(0).fill(''),
};

const initialState = {
  VKenControlPanel: initialFormValues,
};

export const formControlReducer = (
  state: TInitialStateForm = initialState,
  action: TFormActionObject,
) => {
  const { VKenControlPanel } = state;
  switch (action.type) {
    case 'UPDATE_FORM_VALUE':
      //обновляет значение определенного поля в форме
      if (
        isElementPresent(
          VKenControlPanel.currentValues,
          action.payload.fieldName,
        )[1] !== -1
      ) {
        const idx = isElementPresent(
          VKenControlPanel.currentValues,
          action.payload.fieldName,
        )[1];
        const arrayCopy = VKenControlPanel.currentValues;
        return {
          VKenControlPanel: {
            ...VKenControlPanel,
            isFormChanged: !VKenControlPanel.isFormChanged
              ? true
              : VKenControlPanel.isFormChanged,
            currentValues: sliceElementInArray(
              arrayCopy,
              idx,
              action.payload,
            ),
          },
        };
      } else {
        return {
          VKenControlPanel: {
            ...VKenControlPanel,
            isFormChanged: !VKenControlPanel.isFormChanged
              ? true
              : VKenControlPanel.isFormChanged,
            currentValues: [
              ...VKenControlPanel.currentValues,
              action.payload,
            ],
          },
        };
      }
    case 'CLEAN_FORM':
      return initialState;
    default:
      return state;
  }
};

const isElementPresent = (
  array: TInitialVal[] = [],
  fieldName: string,
): [boolean, number] => {
  let idx = -1;
  if (array.length > 0) {
    idx = array.findIndex((value) => value.fieldName == fieldName);
  }
  return [idx !== -1, idx];
};

const sliceElementInArray = (
  array: TInitialVal[] = [],
  index = 0,
  replacer: TInitialVal,
): (TInitialVal | string)[] => {
  if (array.length > 0) {
    return [...array.slice(0, index), replacer, ...array.slice(index + 1)];
  }
  return [];
};
