/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatiron.delete', [
	'flatiron.api'
])
	.directive('fiDelete', function(apiSrvc, $log) {
		return {
			restrict: "A",
			link: function(scope, elem, attrs) {
				elem.on('click', function() {
					var post = JSON.parse(attrs['fiDelete']),
						route = '/api/post/' + post.year + '/' + post.month + '/' + post.filename;

					apiSrvc.deleteData('/api/post/' + post.year + '/' + post.month + '/' + post.filename).then(function(res) {
						$log.info(res);
						if(attrs['fiDeleteData']) {
							var dataArray = scope.$parent[attrs['fiDeleteData']];
							console.log(attrs['fiDeleteIndex']);
							// todo next!!!
							// todo: update parent scope once a file is deleted!!!
						}
					}, function(err) {
						$log.error(err);
					});

					//var modalInstance = $modal.open({
					//	templateUrl: 'myModalContent.html',
					//	controller: 'fiDeleteCtrl',
					//	size: 'md',
					//	resolve: {
					//		post: function () {
					//			return attrs['fiDelete'];
					//		}
					//	}
					//});
					//
					//modalInstance.result.then(function () {
					//	apiSrvc.deleteData('/api/post/:year/:month/:filename').then(function(res) {
					//		$log.info(res.data);
					//	}, function(err) {
					//		$log.error(err);
					//	});
					//}, function () {
					//	$log.info('Modal dismissed at: ' + new Date());
					//});
				});
			}
		}
	})
	.controller('fiDeleteCtrl', function() {

	});