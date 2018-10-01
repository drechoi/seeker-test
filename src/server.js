const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// const createRandomStockInfo = (code, name) => { return {stockCode: code}};

const randomStockGenerator = require('./models/StockInfo');

const stockInfos = [
    randomStockGenerator.createRandomStockInfo("0001", "CKH Holdings"),
    randomStockGenerator.createRandomStockInfo("0005", "HSBC")
];

app.get('/getStockInfo/:stockCode', (req, res) => {
    stockCode = req.params.stockCode;
    
    res.send(stockInfos.find( (stock)=> stock.stockCode === stockCode ) || { 'message': 'item not found' });

    //res.send({ express: 'Hi', id: req.params.id });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

