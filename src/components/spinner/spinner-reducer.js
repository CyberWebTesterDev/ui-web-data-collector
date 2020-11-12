const initialState = {
  isVisible: false,
  data: {
    requestName: "",
  },
};

export const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_SPINNER":
      console.log(action.type + "\n");
      return {
        isVisible: true,
        data: {
          requestName: action.payload,
        },
      };
    case "HIDE_SPINNER":
      console.log(action.type + "\n");
      return {
        ...state,
        isVisible: false,
      };

    default:
      return state;
  }
};
