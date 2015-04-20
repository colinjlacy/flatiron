/**
 * Created by colinjlacy on 4/19/15.
 */
var template = require('../page_objects/template-obj.js');
var post = require('../page_objects/post-obj.js');
var postlist = require('../page_objects/list-obj.js');


describe('Post List', function() {
	it('should work end-to-end', function() {
		browser.get('http://localhost:3000/');

		var title = postlist.getPostTitle(0);
		postlist.viewPost(0);

		expect(post.title.getText()).toEqual(title);
	});
});