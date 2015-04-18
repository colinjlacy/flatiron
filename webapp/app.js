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
				templateUrl: 'webapp/posts/postList.html',
				controller: 'postCtrl'
			})
			.when('/:year/:month/:filename', {
				templateUrl: 'webapp/posts/read.html',
				controller: 'postCtrl'
			})
	})
	.controller("initCtrl", function() {

	});