const initialFormValues = {
  isFormChanged: false,
  initialValues: [
    {
      fieldName: "addToFavorite",
      fieldValue: false,
    },
    {
      fieldName: "yearPicker",
      fieldValue: "",
    },
  ],
  currentValues: [],
};

const initialState = {
  VKenControlPanel: initialFormValues,
};

export const formControlReducer = (state = initialState, action) => {
  const { VKenControlPanel } = state;
  switch (action.type) {
    case "UPDATE_FORM_VALUE":
      //обновляет значение определенного поля в форме
      if (
        isElementPresent(
          VKenControlPanel.currentValues,
          action.payload.fieldName
        )[1] !== -1
      ) {
        const idx = isElementPresent(
          VKenControlPanel.currentValues,
          action.payload.fieldName
        )[1];
        const arrayCopy = VKenControlPanel.currentValues;
        return {
          VKenControlPanel: {
            ...VKenControlPanel,
            isFormChanged: !VKenControlPanel.isFormChanged
              ? true
              : VKenControlPanel.isFormChanged,
            currentValues: sliceElementInArray(arrayCopy, idx, action.payload),
          },
        };
      } else {
        return {
          VKenControlPanel: {
            ...VKenControlPanel,
            isFormChanged: !VKenControlPanel.isFormChanged
                ? true
                : VKenControlPanel.isFormChanged,
            currentValues: [...VKenControlPanel.currentValues, action.payload],
          },
        };
      }
    case "CLEAN_FORM":
      return initialState;
    default:
      return state;
  }
};

const isElementPresent = (array = [], fieldName) => {
  let idx = -1;
  if (array.length > 0) {
    idx = array.findIndex((value) => (value.fieldName == fieldName));
  }
  return [idx !== -1, idx];
};

const sliceElementInArray = (array = [], index = 0, replacer) => {
  let result = [];
  if (array.length > 0) {
      result = [...array.slice(0, index), replacer, ...array.slice(index + 1)];
    }
    return result;
};
