/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatironEdit', [
	'ngRoute',
	'textAngular'
])
.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'webapp/views/list.html'
			})
			.when('/add/post', {
				templateUrl: 'webapp/views/post-edit.html',
				controller: 'postCtrl'
			})
			.when('edit/post/:month/:day/:year/:title', {
				templateUrl: 'webapp/views/edit.html'
			})
			.otherwise({
				templateUrl: 'webapp/views/list.html'
			})
	})
	.controller("initCtrl", function() {

	});