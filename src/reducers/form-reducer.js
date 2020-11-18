const initialFormValues = {
  name: 'vk-en-control-panel',
  values: [
    {
      fieldName: 'addToFavorite',
      fieldValue: false
    },
    {
      fieldName: 'yearPicker',
      fieldValue: ''
    }
  ]
}

const initialState = {
  form: initialFormValues
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
          console.log(`formReducer: action type: ${action.type}`);
          console.log(
            `formReducer: condition value: ${
              isElementPresent(state.form.values, action.payload.fieldName)[0]
            }`
          );
          console.log(
            `formReducer: idx: ${
              isElementPresent(state.form.values, action.payload.fieldName)[1]
            }`
          );
          const idx = isElementPresent(
            state.form.values,
            action.payload.fieldName
          )[1];
          let arrayCopy = state.form.values
          arrayCopy[idx] = action.payload;
          return {
            ...state,
            form: {
              ...state.form,
              values: arrayCopy
            },
          };
        } else {
          console.log(
            `formReducer: condition value: ${
              isElementPresent(state.form.values, action.payload.fieldName)[0]
            }`
          );
          let arrayCopy = state.form.values
          arrayCopy.push(action.payload);
          return {
            ...state,
            form: {
              ...state.form,
              values: arrayCopy,
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
    console.log(`Comparing fieldName: ${fieldName} with array \n`);
    console.log(array);
    idx = array.findIndex((value) => (value.fieldName = fieldName));
  }
  return [idx !== -1, idx];
};

const sliceElementInArray = (array = [], index = 0, replacer) => {
  if (array.length > 0) {
    let result = [];
    if (index > 0) {
      result = [
        ...array.slice(0, index),
        replacer,
        ...array.slice(index + 1),
      ];
    } else {
      result = [
        replacer
      ];
    }

    return result;
  }
};
