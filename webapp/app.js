/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatiron', [
	'ngRoute',
	'ngSanitize',
	'textAngular',
	'flApi'
])
.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'webapp/post/posts/postList.html',
				controller: 'postCtrl'
			})
			.when('/:year/:month/:filename', {
				templateUrl: 'webapp/post/read/read.html',
				controller: 'postCtrl'
			})
			.when('/post/add', {
				templateUrl: 'webapp/post/edit/edit.html',
				controller: 'postCtrl'
			})
			.when('/post/edit', {
				templateUrl: 'webapp/post/edit/list.html',
				controller: 'postCtrl'
			})
			.when('/post/edit/:year/:month/:filename', {
				templateUrl: 'webapp/post/edit/edit.html',
				controller: 'postCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})
	})
	.controller("initCtrl", function() {

	});