
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createHistory();

const middleware = [
  thunk,
  routerMiddleware(history)
];

export const store = createStore(
  //rootReducer,
  connectRouter(history)(rootReducer),  
  applyMiddleware(...middleware)
);

