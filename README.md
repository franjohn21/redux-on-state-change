# Observe Redux state changes

Keep your reducers pure. Keep unnecessary logic out of your React components. 

## You may find this package useful if..
- You currently have something like this in your React components:

  ```
  componentWillReceiveProps: function (nextProps) {
    if (this.props.routing.path !== nextProps.routing.path) {
      // Do something unrelated to this component, e.g. Event tracking
    }
  }
  ```
- You have something like this in your reducers:

  ```
  switch(action.type) {
    case SOMETHING_HAPPENED:
    // Do something unrelated to this reducer, e.g. Event tracking
    break
  }
  ```
---

## Usage
Now you can use this package as side-effects middleware intended for handling functionality unrelated to your reducer or your views.

```
import onStateChange from 'redux-on-state-change'
import { createStore, applyMiddleware } from 'redux'
import myFunc from './my-func'

applyMiddleware(...<your other middleware>, onStateChange(myFunc))(createStore)

```

Where `myFunc` look something like this:

```
const myFunc = (prevState, nextState, action, dispatch) => {
  if (prevState.routing.path !== nextState.routing.path) {
    // ... your logic here
  }
}
```
or
```
const myFunc = (prevState, nextState, action, dispatch) => {
  switch (action.type) {
    case 'SOMETHING_HAPPENED':
    // ... your logic here
    break
  }
}
```


API
---
The function you pass to onStateChange will receive the following:

- **prevState** - The state of the Redux store prior to the action being dispatched
- **nextState** - The state of the Redux store after the action was dispatched
- **action** - The action that was dispatched
- **dispatch** - If you choose to dispatch a new action you can use this.

Motivation
---
The goal of this package is not to encompass everything that you get with other redux side-effects libraries (e.g. async). It's simply to have a place to handle tangentially related logic that doesn't belong in components or reducers but relies on knowing about state or action updates.
