'use strict';

// Declare app level module which depends on views, and components
angular.module('siteApp', [
  'ui.router',
  'ngAnimate',
  'isLoggedIn',
  'welcome-page',
  'composer-landing',
  'programmer-landing',
  'general-landing',
  'about',
  'connect-page',
  'projects',
  'music',
  'blog',
  'login'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/landing', '/landing/general')
  .when('/landing/', '/landing/general')
	.otherwise('/welcome');
}])

.controller('SiteCtrl', ['$scope', '$http', '$state', '$stateParams', 'isLoggedIn', function($scope, $http, _$state_, _$stateParams_, isLoggedIn) {
  $scope.$state = _$state_;
  $scope.$stateParams = _$stateParams_;
  $scope.textcontent = {};
  isLoggedIn().then(function(res) {
    $scope.isLoggedIn = res.data;
  }, function(res) {
    $scope.isLoggedIn = false;
  })
  $scope.breakByNewLine = function (str)
  {
    return str.split('\n');
  }
  $http.get('/constants/text-content.json').then(function(res)
  {
    $scope.textcontent = res.data;
  },
  function(red)
  {
    console.log("ERROR RETRIEVING TEXT CONTENT");
  })
}])
