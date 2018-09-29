
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router'

const middleware = [
    thunk,
    routerMiddleware(history)
  ]

  
export const history = createHistory()

export default function configureStore(initialState={}) {
 return createStore(
  //rootReducer,
  connectRouter(history)(rootReducer),
   applyMiddleware(...middleware)
 );
}