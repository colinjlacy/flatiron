/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatiron.post', [
	'flatiron.delete',
	'flatiron.api'
])
.controller('postCtrl', function($scope, $route, $routeParams, apiSrvc) {

		 var url = function() {
			return $routeParams.filename ?
			 '../archive/posts/' + $routeParams.year + '/' + $routeParams.month + '/' + $routeParams.filename + '.json' :
			 '../archive/posts/index.json';
		};

		$scope.getPostData = function() {
			apiSrvc.getData(url()).then(function (res) {
				var keys = Object.keys(res);
				for(var i = 0; i < keys.length; i++) {
					$scope[keys[i]] = res[keys[i]];
				}
			});
		};

		$scope.getIndex = function() {
			apiSrvc.getData(url()).then(function (res) {
				$scope.index = res;
				$scope.categories = [];
				for (var i = 0; i < $scope.index.length; i++) {
					angular.forEach($scope.index[i].categories, function(value, index) {
						if(!value.isIn($scope.categories)) {
							$scope.categories.push(value);
						}
					});
				}
			});
		};

		if(angular.isDefined($routeParams.filename)) {
			$scope.getPostData();
		} else {
			$scope.getIndex();
		}

	});