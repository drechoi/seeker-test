// export const GET_STOCK_INFO_BEGIN = 'GET_STOCK_INFO_BEGIN';
export const GET_STOCK_INFO_SUCCESS = 'GET_STOCK_INFO_SUCCESS';
export const GET_STOCK_INFO_FAILED = 'GET_STOCK_INFO_FAILED';

// export const getStockInfoSuccess = stockInfo => ({
//     type: GET_STOCK_INFO_SUCCESS,
//     payload: {stockInfo}
// })

// export const getStockInfoFailed = error => ({
//     type: GET_STOCK_INFO_FAILED,
//     payload: {error}
// })


export const fetchStockInfo = (stockCode) => {
    return dispatch => fetch(`http://localhost:5000/getStockInfo/${stockCode}`)
    .then(res => res.json())
    .then(
        data => {
            console.log("Then data");
            console.log(data);
            return dispatch({ type: GET_STOCK_INFO_SUCCESS, payload: data});
        },
        err => {
            console.log("Then err");
            console.log(err);
            return dispatch({type: GET_STOCK_INFO_FAILED, payload: err});
        }
    )
}