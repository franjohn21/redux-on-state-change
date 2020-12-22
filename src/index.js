export default fn => store => next => action => {
  const prevState = store.getState();
  const result = next(action);
  const nextState = store.getState();
  fn(prevState, nextState, action, store.dispatch, store);
  return result;
};
