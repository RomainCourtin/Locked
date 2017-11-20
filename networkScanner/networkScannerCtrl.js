var express = require('express')
var ip = require('ip')
const nmap = require('node-nmap')
var router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log('/scan -> Time: ', Date.now())
  next()
})

router.get('/', function(req, res, next){
  var ipAddress = ip.address()+'/24'
  //var ipAddress = '192.168.1.33'+'/24'
  console.log('Scan with IP: ', ipAddress)
  
  let quickscan = new nmap.QuickScan(ipAddress);

  quickscan.on('complete', function(data){
    console.log('Scan complete')
    res.json(data) 
  });
   
  quickscan.on('error', function(error){
    res.send(error) 
  });

  quickscan.startScan();
})

module.exports = router;
