const initialState = {
  form: {
    name: null,
    values: [
      {
        fieldName: null,
        fieldValue: false,
      },
    ],
  },
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_FORM_NAME":
      //определяет название формы с которой производится работа
      console.log(`formReducer: action type: ${action.type}`);
      return { ...state, form: { ...state.form, name: action.payload } };
    case "UPDATE_FORM_VALUE":
      //обновляет значение определенного поля в форме
      if (isElementPresent(state.form.values, action.payload.fieldName)[0]) {
        const idx = isElementPresent(
          state.form.values,
          action.payload.fieldName
        )[1];
        return {
          ...state,
          form: {
            ...state.form,
            values: sliceElementInArray(state.form.values, idx, action.payload),
          },
        };
      } else {
        return {
          ...state,
          form: {
            ...state.form,
            values: [...state.form.values, ...action.payload],
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
    idx = array.findIndex((value) => (value.fieldName = fieldName));
  }
  return [idx !== -1, idx];
};

const sliceElementInArray = (array = [], index = 0, replacer) => {
  if (array.length > 0) {
    let result = [
      ...array.slice(0, index),
      replacer,
      ...array.slice(index + 1, array.length),
    ];
    return result;
  }
};
