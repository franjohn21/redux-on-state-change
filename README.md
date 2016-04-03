# Redux On State Change Middleware

Keep your reducers pure. Keep unnecessary logic out of your React components. Extremely simple middleware to react to Redux state changes.

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
    case 'SOMETHING_HAPPENED'
    // Do something unrelated to this reducer, e.g. Event tracking
    break
  }
  ```

Now you can use this package as side-effects middleware intended for handling functionality unrelated to your reducer or your views.

```
import onStateChange from 'redux-on-state-change'
applyMiddleware(...<your other middleware>, onStateChange(myFunc))(createStore)

```
d
Where `myFunc` look something like this:
```
const myFunc = (prevState, nextState, action) => {
  switch (action.type) {
    case 'SOMETHING_HAPPENED':
    // ... your logic here
    break
  }
}
```



