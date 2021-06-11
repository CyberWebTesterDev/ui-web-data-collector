const initialState = {
  visible: false,
  isForPost: false,
  labels: [],
  classNames: [],
  text: '',
  post: {},
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL_FOR_POST':
      console.log(action.type + '\n');
      return {
        ...state,
        visible: true,
        isForPost: true,
        post: action.payload,
      };
    case 'CLOSE_MODAL':
      console.log(action.type + '\n');
      return {
        ...state,
        visible: false,
      };

    default:
      return {
        ...state,
      };
  }
};
