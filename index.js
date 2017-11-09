var express = require('express')

var app = express()

var networkScanner = require('./networkScanner/networkScannerCtrl')

app.use('/scan', networkScanner)

app.listen(3000)

module.exports = app

