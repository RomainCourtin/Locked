var express = require('express')

var app = express()

var networkScanner = require('./networkScanner/networkScannerCtrl')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return next();
});

app.use('/scan', networkScanner)

app.listen(3000)

module.exports = app

