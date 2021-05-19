import { applyMiddleware, compose, createStore } from 'redux';
import mainReducer from './reducers/index';
import { logger } from './components/utils/middleware/logger-middleware';
import { getVKProfileById } from './components/utils/middleware/get-vk-en-profile';

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
   mainReducer,
   composeEnhancers(applyMiddleware(logger, getVKProfileById)),
);

export default store;
