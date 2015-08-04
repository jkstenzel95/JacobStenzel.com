'use strict';

angular.module('welcome-page', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('welcome', {
  	url: '/welcome',
    controller: 'WelcomePageCtrl'
  });
}])

.controller('WelcomePageCtrl', [function() {
	
}]);