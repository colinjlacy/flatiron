/**
 * Created by colinjlacy on 4/12/15.
 */
var expressValidator = require('express-validator');
var fs = require('fs');
var mkdirp = require('mkdirp');

var Insert = function(req) {

	this.postObj = {};

	this.urlStringify = function(string) {
		return string.replace(/ /g, '-');
	};

	this.buildObj = function(req) {
		this.postObj.title = req.body.postTitle;
		this.postObj.filename = this.urlStringify(this.postObj.title).toLowerCase();
		this.postObj.subheading = req.body.postSubHeading;
		this.postObj.content = req.body.postContent;
		this.postObj.excerpt = req.body.postExcerpt;
		this.postObj.createdOn = req.body.createdOn;
		this.postObj.revisedOn = req.body.revisedOn;
	};

	this.createFile = function(obj) {
		var dir = '../../archive/posts/', // todo: add this to a config
			date = new Date(this.postObj.createdOn),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			path = dir + year + '/' + month,
			filepath = path + '/' + this.postObj.filename + '.json',
			postObj = this.postObj;

		mkdirp(path, function(err) {
			console.log(path);
			if (err) return err;
		});

		fs.lstat(filepath, function(err, data) {
			if (err || !data.isFile()) {
				fs.readFile(dir + 'index.json', function(err, data) {
					if (err) throw err;
					var postArray = JSON.parse(data);
					postArray.push({
						title: postObj.title,
						filename: postObj.filename,
						excerpt: postObj.excerpt,
						year: year,
						month: month,
						createdOn: postObj.createdOn,
						revisedOn: postObj.revisedOn
					});
					fs.writeFile(dir + 'index.json', JSON.stringify(postArray), function(err) {
						if (err) throw err;
						return filepath;
					});
				});
			}
		});
		fs.writeFile(filepath, JSON.stringify(postObj), function(err) {
			if (err) throw err;
		});
	};

	this.validate = function(req) {
		req.checkBody('postTitle', 'Valid Post Title Required').notEmpty();
		req.checkBody('postContent', 'Valid Post Content Required').notEmpty();
		req.checkBody('postSubHeading', 'Post Subheading must be valid text').optional();
		req.checkBody('postExcerpt', 'Post Excerpt must be valid text').optional();

		var errors = req.validationErrors();
		if (errors && errors.length > 0) {
			return errors;
		}

		this.buildObj(req);
		this.createFile(this.postObj);
	};

};

module.exports = new Insert();