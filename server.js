var portNo = 2017;//Port node uses for this demo
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/', express.static(__dirname + '/'));
app.use(bodyParser.json())
app.use(function(req, res ,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next()
});

app.listen(portNo,function(){
	console.log("Port Open : ",portNo)
})
