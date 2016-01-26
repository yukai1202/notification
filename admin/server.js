var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
	
var port = process.env.PORT || 8089;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 
app.post('/send', function (req, res) {
	var parm1 = req.body.aaa;
	var parm2 = req.body.bbb;
	
	var obj = {parm1: parm1, parm2: parm2};
	res.json(obj);
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

