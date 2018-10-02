const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

var cors = require('cors');

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

const randomStockGenerator = require('./models/StockInfo');

const stockInfos = [
    randomStockGenerator.createRandomStockInfo("0001", "CKH HOLDINGS"),
    randomStockGenerator.createRandomStockInfo("0002", "CLP HOLDINGS"),
    randomStockGenerator.createRandomStockInfo("0003", "HK & CHINA GAS"),
    randomStockGenerator.createRandomStockInfo("0004", "WHARF HOLDINGS"),
    randomStockGenerator.createRandomStockInfo("0005", "HSBC HOLDINGS")
];

app.get('/getStockInfo/:stockCode', (req, res) => {
    stockCode = parseInt( req.params.stockCode );
    res.send(stockInfos.find( (stock)=> parseInt( stock.stockCode) === stockCode ) || stockInfos[0]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

