/**
 * Created by colinjlacy on 4/11/15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var postInsert = require('./models/post/insert.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator()); // this line must be immediately after express.bodyParser

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
	next();
});

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.post('/post/', function(req, res) {
	console.log(req);
	req.checkBody('postTitle', 'Valid Post Title Required').notEmpty().isAlpha();
	req.checkBody('postContent', 'Valid Post Content Required').notEmpty().isAlpha();
	req.checkBody('postSubHeading', 'Post Subheading must be valid text').optional().isAlpha();

	var insertValue;

	var errors = req.validationErrors();
	if (errors.length > 0) {
		insertValue = errors;
	} else {
		insertValue = {message: "success!"};
	}
	res.json(insertValue);
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);