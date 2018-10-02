function myRound(value){
    return parseFloat(value.toFixed(2));
}

const PRICE_MAX = 150;
var currentPrice = Math.random() * PRICE_MAX;

// random range is price +- 10%
const randomDelta = (price) => (Math.random() - 0.5) * price / 10.0;

exports.createRandomStockInfo = (stockCode, StockName) => { return {
    'stockCode': stockCode,
    'stockName': StockName,
    'priceCurrent': myRound(currentPrice),
    'priceChange': myRound(randomDelta(currentPrice)),
    'historialData': [
        {month: 'May', price: myRound(currentPrice + randomDelta(currentPrice))},
        {month: 'July', price: myRound(currentPrice + randomDelta(currentPrice))},
        {month: 'June', price: myRound(currentPrice + randomDelta(currentPrice))},
        {month: 'Aug', price: myRound(currentPrice + randomDelta(currentPrice))},
        {month: 'Sept', price: myRound(currentPrice + randomDelta(currentPrice))},

    ],

}}