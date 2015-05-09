/**
 * Created by colinjlacy on 4/11/15.
 */
angular.module('flatiron.edit', [

])
.directive('fiSavePost', function(apiSrvc) {
		return {
			restrict: "A",
			link: function(scope, elem) {
				elem.on('click', function(e) {
					e.preventDefault();

					var postObj = {};

					if(!scope.createdOn) {
						postObj.createdOn = new Date();
						postObj.revisedOn = angular.copy(postObj.createdOn);
					} else {
						postObj.createdOn = scope.createdOn;
						postObj.revisedOn = new Date();
					}

					// get content from the thing
					postObj.title = scope.title;
					postObj.subHeading = scope.subheading;
					postObj.content = scope.content;
					postObj.excerpt = scope.excerpt;

					console.log(postObj);
					apiSrvc.postData('http://localhost:8080/api/post/', postObj).then(function(res){ // todo: add URL to a config
						console.log(res);
					});

				});
			}
		}
	});