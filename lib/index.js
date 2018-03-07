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
        (fn.constructor === Array ? fn : [fn]).forEach(function (f) {
          f(prevState, nextState, action, store.dispatch);
        });
        return result;
      };
    };
  };
};