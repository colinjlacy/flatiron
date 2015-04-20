/**
 * Created by colinjlacy on 4/18/15.
 */
var Post = function() {
	this.title = element(by.tagName('h1'));
	this.sub = element(by.tagName('h3'));
	this.content = element(by.model('content'));
	return this;
};

module.exports = new Post();