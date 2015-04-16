/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatironEdit', [
	'ngRoute',
	'textAngular',
	'flApi'
])
.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'webapp/views/list.html'
			})
			.when('/add/post', {
				templateUrl: 'webapp/post/edit.html',
				controller: 'postCtrl'
			})
			.when('/edit/post', {
				templateUrl: 'webapp/post/list/list.html',
				controller: 'postCtrl'
			})
			.when('/edit/post/:year/:month/:filename', {
				templateUrl: 'webapp/post/edit/edit.html',
				controller: 'postCtrl'
			})
			.otherwise({
				templateUrl: 'webapp/views/list.html'
			})
	})
	.controller("initCtrl", function() {

	});