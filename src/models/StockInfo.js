function myRound(value){
    return Math.round(value * 100) / 100.0;
}

const PRICE_MAX = 150;
var currentPrice = myRound(Math.random() * PRICE_MAX);

// random range is price +- 10%
const randomDelta = (price) => myRound((Math.random() - 0.5) * price / 10.0);

exports.createRandomStockInfo = (stockCode, StockName) => { return {
    'stockCode': stockCode,
    'stockName': StockName,
    'priceCurrent': currentPrice,
    'priceChange': randomDelta(currentPrice),
    'historialData': [
        {month: 'May', price: currentPrice + randomDelta(currentPrice)},
        {month: 'July', price: currentPrice + randomDelta(currentPrice)},
        {month: 'June', price: currentPrice + randomDelta(currentPrice)},
        {month: 'Aug', price: currentPrice + randomDelta(currentPrice)},
        {month: 'Sept', price: currentPrice + randomDelta(currentPrice)},

    ],

}}