const initialState = {
  isVisible: false,
  duration: 0,
  className: "",
  data: {
    text: "",
  },
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POPUP_SHOW":
      console.log(action.type + "\n");
      if (state.isVisible) {
        console.log("Popup is already visible" + "\n");
        return {
          ...state,
        };
      }
      return {
        isVisible: true,
        className: action.payload.className,
        duration: action.payload.duration,
        data: {
          text: action.payload.text,
        },
      };
    case "POPUP_HIDE":
      console.log(action.type + "\n");
      return {
        ...state,
        isVisible: false,
        duration: 0,
      };

    default:
      return state;
  }
};
