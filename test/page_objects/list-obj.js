/**
 * Created by colinjlacy on 4/18/15.
 */
var PostList = function() {
	this.posts = element.all(by.repeater('post in index'));
	this.getPostTitle = function(int) {
		var tr = element.all(by.css('tbody > tr')).get(int);
		return tr.element(by.tagName('a')).getText();
	};
	this.viewPost = function(int) {
		var tr = element.all(by.css('tbody > tr')).get(int);
		return tr.element(by.tagName('a')).click();
	};
	return this;
};

module.exports = new PostList();