/**
 * Created by colinjlacy on 5/2/15.
 */
var fs = require('fs');
var dir = './archive/posts/'; // todo: add this to a config

var Delete = function() {
	this.post = function(params) {
		// remove the post from the archive
		fs.unlinkSync(dir + params.year + '/' + params.month + '/' + params.filename + '.json');

		// remove the link from the index
		var index = JSON.parse(fs.readFileSync(dir + 'index.json', 'utf8'));
		// todo: make use of IDs in post index!!!
		for (var i = 0; i < index.length; i++) {
			if (
				index[i].year === parseInt(params.year) &&
				index[i].month === parseInt(params.month) &&
				index[i].filename === params.filename
			) {
				index.splice(i, 1);
				break;
			}
		}
		fs.writeFileSync(dir + 'index.json', JSON.stringify(index));
	}
};

module.exports = new Delete();