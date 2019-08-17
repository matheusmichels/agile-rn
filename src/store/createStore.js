import { createStore, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  return createStore(reducers, applyMiddleware(...middlewares));
};
