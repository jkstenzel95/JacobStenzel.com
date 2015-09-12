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
  });
  $scope.breakByNewLine = function (str)
  {
    return str === undefined ? [] : str.split('\n');
  };
  $http.get('/constants/text-content.json').then(function(res)
  {
    $scope.textcontent = res.data;
  },
  function(res)
  {
    console.log("ERROR RETRIEVING TEXT CONTENT");
  });
}])

// Borrowed from post by 'Chris' on StackOverflow
.directive('bindToHeight', function ($window) {

    return {
        restrict: 'A',

        link: function (scope, elem, attrs) {
            var attributes = scope.$eval(attrs['bindToHeight']);
            var targetElem = angular.element(document.querySelector(attributes[1]));

            // Watch for changes
            scope.$watch(function () {
                return targetElem.height();
            },
            function (newValue, oldValue) {
                if (newValue != oldValue) {
                    elem.css(attributes[0], newValue);
                }
            });
        }
    };
});