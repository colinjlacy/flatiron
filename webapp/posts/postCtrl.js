/**
 * Created by colinjlacy on 4/13/15.
 */
angular.module('flatiron')
.controller('postCtrl', function($scope, apiSrvc) {
		apiSrvc.getData('./archive/posts/index.json').then(function(res) {
			$scope.postIndex = res;
			console.log($scope.postIndex);
		});
	});