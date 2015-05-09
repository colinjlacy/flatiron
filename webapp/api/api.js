/**
 * Created by colinjlacy on 4/12/15.
 */
/*
 Welcome to your first Angular service!

 What's a service you might ask?  A service in Angular is very much like a service in Java.  It's a collection of functions that you're going to call throughout your application.  Think of it as modular code that you can separate out of your application into bits that are only called where you need them to be.

 This particular service is going to be used to make API calls.
 */
angular.module('flatiron.api', [])
	.service('apiSrvc', function($http, $q) {

		return {

			// creating the GET call
			getData: function (url, args) {

				// this creates an object that will be expecting a set of asynchronous data
				var returnData = $q.defer();

				// here, we make the call to the database
				$http({
					url: url,
					method: 'GET',
					args: (!!args) ? args : {}
				})
					// the success method fires if the backend successfully returned data
					.success(function (data) {
						// we'll set the data that's returned to the object expecting asynchronous data.
						returnData.resolve(data);
					})
					// if the backend returned an error, we pass the error to the client instead.
					.error(function (error) {
						console.log(error);
						returnData.reject();
					});
				// now we return the promise of the API call - whether successful or not
				return returnData.promise;
			},

			// creating the POST call
			postData: function (url, data) {

				// this creates an object that will be expecting a set of asynchronous data
				var returnData = $q.defer();

				// here, we make the call input into the database
				$http({
					url: url,
					method: 'POST',
					data: data
				})
					// the success method fires if the backend successfully returned data
					.success(function (data) {
						// we'll set the data that's returned to the object expecting asynchronous data.
						returnData.resolve(data);
					})
					// if the backend returned an error, we pass the error to the client instead.
					.error(function (error) {
						console.log(error);
						returnData.reject();
					});
				// now we return the promise of the API call - whether successful or not
				return returnData.promise;
			},

			// creating the POST call
			deleteData: function (url) {

				// this creates an object that will be expecting a set of asynchronous data
				var returnData = $q.defer();

				// here, we make the call input into the database
				$http({
					url: url,
					method: 'DELETE'
				})
					// the success method fires if the backend successfully returned data
					.success(function (data) {
						// we'll set the data that's returned to the object expecting asynchronous data.
						returnData.resolve(data);
					})
					// if the backend returned an error, we pass the error to the client instead.
					.error(function (error) {
						console.log(error);
						returnData.reject();
					});
				// now we return the promise of the API call - whether successful or not
				return returnData.promise;
			}
		}
	});