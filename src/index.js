export default fn => store => next => action => {
  let prevState = store.getState()
  let result = next(action)
  let nextState = store.getState()
  fn(prevState, nextState, action, store.dispatch)
  return result
}
