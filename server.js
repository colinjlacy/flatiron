/**
 * Created by colinjlacy on 4/11/15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var postInsert = require('./edit/models/post/insert.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
var dir = __dirname;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator()); // this line must be immediately after express.bodyParser
app.use(express.static(dir));
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
	next();
});

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/', function(req, res){
	var options = {
		root: dir
	};
	res.sendFile('/index.html', options);
});

router.post('/api/post/', function(req, res) {
	res.json(postInsert.validate(req));
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
//app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port ' + port);