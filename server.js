var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('app'));

app.use(function(req, res, next){
	//console.log(req.headers['x-forwarded-proto'])
	if(req.headers['x-forwarded-proto'] === 'https'){
		alert("here");
		res.redirect('http://' + req.hostname + req.url);

	}
	else{
		next();
	}
});

app.listen(PORT,function(){
	console.log("Listening on port "+PORT);

});
