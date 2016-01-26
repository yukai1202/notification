var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require('path');
	

var port = 8088;
app.use(express.static(path.join(__dirname + '/public')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/send', function(req, res){
	//console.log(req.body.msg +"  "+req.body.bbb);

	var value  = {msg:req.body.msg, datetime: new Date()};
	
	for(var i =0;i< list.length;i++){
		var obj = list[i];
		obj.socket.emit('receiveNotification', JSON.stringify(value))
	}
	res.json(true);
});
app.get('/', function(req, res){
	res.render('index.html');
});
 

app.get('/connect', function(req, res){
	res.json(true);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



var list = [];
 

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
   
  var obj = {socket: socket};
  list.push(obj);

  socket.on('disconnect', function(){
	console.log("");
  });

  socket.emit('connected', true);
});

server.listen(port);
console.log("Example app listening at 8088");
/*
var spawn = require('child_process').spawn;

for(var i =0;i <2;i++){
	var child = spawn('call', ["app.bat", "com.app.v"+i]);
	child.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
   });

   child.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
   });

   child.on('close', function (code) {
      console.log('child process exited with code ' + code);
   });
}*/

/*

exec("call app1.bat \"com.app.test\" \"Demo\"", function(error, stdout, stderr) {
  // command output is in stdout
	console.log("2222222222");
});*/