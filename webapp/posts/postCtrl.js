/**
 * Created by colinjlacy on 4/13/15.
 */
angular.module('flatiron')
.controller('postCtrl', function($scope, $routeParams, $sce, apiSrvc) {
		var url = function() {
			return $routeParams.filename ?
			'../archive/posts/' + $routeParams.year + '/' + $routeParams.month + '/' + $routeParams.filename + '.json' :
				'../archive/posts/index.json';
		};

		$scope.getPostData = function() {
			apiSrvc.getData(url()).then(function (res) {
				console.log(res);
				var keys = Object.keys(res);
				for(var i = 0; i < keys.length; i++) {
					$scope[keys[i]] = res[keys[i]];
				}
			});
		};

		$scope.getIndex = function() {
			apiSrvc.getData(url()).then(function (res) {
				$scope.index = res;
				console.log($scope.index);
			});
		};

		if(angular.isDefined($routeParams.filename)) {
			$scope.getPostData();
		} else {
			$scope.getIndex();
		}
	});