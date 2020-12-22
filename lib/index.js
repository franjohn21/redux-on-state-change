"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn) {
  return function (store) {
    return function (next) {
      return function (action) {
        var prevState = store.getState();
        var result = next(action);
        var nextState = store.getState();
        fn(prevState, nextState, action, store.dispatch, store);
        return result;
      };
    };
  };
};