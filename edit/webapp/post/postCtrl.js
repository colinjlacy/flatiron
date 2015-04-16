/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatironEdit')
.controller('postCtrl', function($scope, $route, $routeParams, apiSrvc) {

		 var url = function() {
			return '../archive/posts/' + $routeParams.year + '/' + $routeParams.month + '/' + $routeParams.filename + '.json';
		};

		$scope.getPostData = function() {
			apiSrvc.getData(url()).then(function (res) {
				var keys = Object.keys(res);
				for(var i = 0; i < keys.length; i++) {
					$scope[keys[i]] = res[keys[i]];
				}
			});
		};

		if($routeParams.filename) {
			$scope.getPostData();
		}

		/*
		KNOWN BUG:
		changing routes does not update the view when navigating between posts. E.g. changing the browser URL from one post to another does nothing!!
		attempts at fixing this are below
		 */

		$scope.$on('$locationChangeStart', function() {
			$scope.$apply();
			$scope.getPostData();
		});
	});