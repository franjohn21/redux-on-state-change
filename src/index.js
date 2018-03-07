export default fn => store => next => action => {
  const prevState = store.getState();
  const result = next(action);
  const nextState = store.getState();
  (fn.constructor === Array ? fn : [fn]).forEach(f => {
    f(prevState, nextState, action, store.dispatch);
  });
  return result;
};
