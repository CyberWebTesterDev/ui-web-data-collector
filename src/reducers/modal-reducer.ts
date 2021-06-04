import { IActionObjectWithPayload } from "../lib";

const initialState = {
  visible: false,
  isForPost: false,
  labels: [],
  classNames: [],
  text: "",
  post: {},
};

type TInitialModalState = {
  visible: boolean,
  isForPost: boolean,
  labels: Array<string>,
  classNames: Array<string>,
  text: string,
  post: {
    [key: string]: any
  },
}

type TModalReducer = (state: TInitialModalState, action: IActionObjectWithPayload) => TInitialModalState; 

export const modalReducer: TModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL_FOR_POST":
      console.log(action.type + "\n");
      return {
        ...state,
        visible: true,
        isForPost: true,
        post: action.payload,
      };
    case "CLOSE_MODAL":
      console.log(action.type + "\n");
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
