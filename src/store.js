import { applyMiddleware, createStore } from "redux";
import mainReducer from "./reducers/index";
import { logger } from "./components/utils/middleware/logger-middleware";
import { getVKProfileById } from "./components/utils/middleware/get-vk-en-profile";

const store = createStore(
  mainReducer,
  applyMiddleware(logger, getVKProfileById)
);

export default store;
