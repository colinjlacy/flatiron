/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatiron', [
	'ngRoute',
	'flApi'
])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'webapp/posts/postList.html',
				controller: 'postCtrl'
			})
	})
	.controller("initCtrl", function() {

	});