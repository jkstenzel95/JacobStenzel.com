'use strict';

angular.module('login', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
  	url: '/admin/login',
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
			$window.location.href = '/testLoggedIn';
		}), function(res)	{
			alert("Incorrect username/password! Try again... or don't.");
		}
	}
}]);