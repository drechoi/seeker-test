const createRandomStockInfo = (stockCode, StockName) => { return {
    stockCode: "00001",
    stockName: "CKH Holdings",
    priceCurrent: (1 + Math.random() * 1000) / 10.0,
    priceChange: (1 + Math.random() * 100) / 10.0,
    historialData: [
        {month: 'May', price: 10.5},
        {month: 'July', price: 10.3},
        {month: 'June', price: 9.8},
        {month: 'Aug', price: 9.9},
        {month: 'Sept', price: 10.2},

    ],

}}