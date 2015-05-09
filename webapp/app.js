/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatiron', [
	'ngRoute',
	'ngSanitize',
	'textAngular',
	//'ui.bootstrap',
	'flatiron.api',
	'flatiron.edit',
	'flatiron.post',
	'flatiron.delete'
])
.config(function($routeProvider) {
		$routeProvider
			.when('/post', {
				templateUrl: 'webapp/list/list.html',
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
				templateUrl: 'webapp/list/list.html',
				controller: 'postCtrl'
			})
			.when('/post/edit/:year/:month/:filename', {
				templateUrl: 'webapp/post/edit/edit.html',
				controller: 'postCtrl'
			})
			.otherwise({
				redirectTo: '/post'
			})
	})
	.controller("initCtrl", function() {

	});