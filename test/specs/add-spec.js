/**
 * Created by colinjlacy on 4/18/15.
 */

var template = require('../page_objects/template-obj.js');
var editor = require('../page_objects/editor-obj.js');
var post = require('../page_objects/post-obj.js');
var postlist = require('../page_objects/list-obj.js');

describe('Add Post', function() {
	var enterTitle = "Test Title!" + new Date().getTime();

	it('should load the textAngular directive', function() {
		browser.get('http://localhost:8080/#/post/edit');
		template.clickNav(2);
		expect(editor.toolbar.isPresent()).toBe(true);
	});

	it('should create a post', function() {
		editor.enterTitle(enterTitle);
		editor.enterSubheading('test subheading');
		editor.enterContent('This is my Test Content!!');
		editor.clickSubmit();

		browser.get('http://localhost:8080/#/post/edit');

		postlist.posts.count().then(function(count) {
			var postTitle = postlist.getPostTitle(count - 1);
			expect(postTitle).toEqual(enterTitle);
		});
	});

	it('should work end-to-end', function() {
		browser.get('http://localhost:8080/#/post');
		postlist.posts.count().then(function(count) {
			var postTitle = postlist.getPostTitle(count - 1);
			expect(postTitle).toEqual(enterTitle);
		});
	});
});