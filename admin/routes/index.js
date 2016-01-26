var router = require('express').Router();

router.get('/', function(req, res) {
	res.sendFile("index.html", {
		root: "public"
	});
});


router.get('/admin', function(req, res) {
	res.sendFile("admin.html", {
		root: "public"
	});
});


router.post('/send', function(req, res) {
	console.log(req.body.aaa +"  "+req.body.bbb);
	 
	res.json(true);

	/*res.sendFile("admin.html", {
		root: "public"
	});*/
});

module.exports = router;
