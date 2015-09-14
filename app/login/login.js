'use strict';

angular.module('login', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
  	url: '/login',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$http', '$scope', '$window', function($http, $scope, $window) {
	$scope.submitLogin = function(username, password)	{
		$http({
			method: 'POST',
			url: '/login',
			data: {'username': username, 'password': password} // pass in data as strings
		}).then(function(res)	{
			$window.location.href = '/admin';
		}, function(res)	{
			console.log("nope");
			$window.alert("Incorrect username/password! Try again... or don't.");
		}
	)
}}]);