import { reducerVK } from "./vk-reducers";
import { spinnerReducer } from "../components/spinner/spinner-reducer";
import { popupReducer } from "../components/forms/popups/popup-reducer";
import { combineReducers } from "redux";
import { postViewReducer } from "./post-view-reducers";
import { modalReducer } from "./modal-reducer";
import { vkEnrichmentProfileReducer } from "./vk-enrichment-reducer";

const mainReducer = combineReducers({
  vkData: reducerVK,
  loaders: spinnerReducer,
  popups: popupReducer,
  postForm: postViewReducer,
  modal: modalReducer,
  profileEnrichmentData: vkEnrichmentProfileReducer
});

//     (state, action) => {
//
//     //console.log(state);
//     // const newState = {
//     //     vkData: reducerVK(state, action)
//     // }
//
//     // console.log(`Main reducer`+'\n')
//     // console.log(newState);
//     // return newState;
//
//
//     return {
//         vkData: reducerVK(state, action)
//     }
//
// }
//
export default mainReducer;
