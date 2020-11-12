// middleware для логирования действий
// dispatch (иногда данный аргумент именуют next)
export const logger = (store) => (dispatch) => (action) => {
  console.log(`LOGGER: an action has been intercepted`);
  console.log(`LOGGER: current State: \n`);
  console.log(store.getState());
  console.log(`LOGGER: current action: \n`);
  console.log(action);
  console.log(`LOGGER: current State: \n`);
  return dispatch(action);
};
