import { combineReducers } from 'redux';

// calling the default reducer to create a link
import stockInfoReducer from './stockInfoReducer';

const rootReducers = combineReducers({
    // add reducer files references here
    stockInfo: stockInfoReducer
});

export default rootReducers;