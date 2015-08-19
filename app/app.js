'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngAnimate',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'welcome-page',
  'composer-landing',
  'programmer-landing',
  'general-landing',
  'about',
  'connect-page',
  'projects',
  'music',
  'blog'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/landing', '/landing/general')
  .when('/landing/', '/landing/general')
	.otherwise('/welcome');
}])

.controller('AppCtrl', ['$scope', '$state', function($scope, _$state_) {
    $scope.$state = _$state_;
}])
