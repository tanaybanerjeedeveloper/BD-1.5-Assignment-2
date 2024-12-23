const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Welcome to Stock portfolio analysis API!');
});

//Endpoint-1
const calculateReturns = (boughtAt, marketPrice, quantity) => {
  let returnValue = (marketPrice - boughtAt) * quantity;
  return returnValue;
};
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  res.send(calculateReturns(boughtAt, marketPrice, quantity).toString());
});

//Endpoint-2
const calculateTotalReturn = (s1, s2, s3, s4) => {
  let total = s1 + s2 + s3 + s4;
  return total;
};
app.get('/total-returns', (req, res) => {
  let s1 = parseFloat(req.query.stock1);
  let s2 = parseFloat(req.query.stock2);
  let s3 = parseFloat(req.query.stock3);
  let s4 = parseFloat(req.query.stock4);
  res.send(calculateTotalReturn(s1, s2, s3, s4).toString());
});

//'Endpoint-3
const calculateReturnPercentage = (boughtAt, returns) => {
  let returnPercentage = (returns / boughtAt) * 100;
  return returnPercentage;
};
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(calculateReturnPercentage(boughtAt, returns).toString());
});

//Endpoint-4
const calculateTotalReturnPercentage = (s1, s2, s3, s4) => {
  let total = s1 + s2 + s3 + s4;
  return total;
};
app.get('/total-return-percentage', (req, res) => {
  let s1 = parseFloat(req.query.stock1);
  let s2 = parseFloat(req.query.stock2);
  let s3 = parseFloat(req.query.stock3);
  let s4 = parseFloat(req.query.stock4);
  res.send(calculateTotalReturnPercentage(s1, s2, s3, s4).toString());
});

//Endpoint-5
const profitOrLoss = (returnPercentage) => {
  if (returnPercentage > 0) {
    return 'Profit';
  } else {
    return 'Loss';
  }
};
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(profitOrLoss(returnPercentage));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
