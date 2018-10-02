import {
  GET_STOCK_INFO_SUCCESS,
  GET_STOCK_INFO_FAILED
} from '../actions/stockInfoAction';

const initialState = {
  stockCode: "00001",
  stockName: "CKH Holdings",
  priceCurrent: 10.0,
  priceChange: "+0.2",
  historialData: [
      {month: 'May', price: 10.5},
      {month: 'July', price: 10.3},
      {month: 'June', price: 9.8},
      {month: 'Aug', price: 9.9},
      {month: 'Sept', price: 10.2},
  ],
};

export default (state = initialState, action) => {
  console.log("Reducer: " );
  console.log(action.type);
    switch (action.type) {
     case 'CONSTANT_ACTION':
      return {
       result: action.payload
      }
      case GET_STOCK_INFO_SUCCESS:
        return {...state, ...action.payload };
     default:
      return state
    }
   }