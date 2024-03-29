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

.controller('SiteCtrl', ['$scope', '$http', '$state', '$stateParams', '$window', '$rootScope', '$sce', 'isLoggedIn', function($scope, $http, _$state_, _$stateParams_, $window, $rootScope, $sce, isLoggedIn) {
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
    return str === undefined ? [] : str.split(/[\n]+/);
  };
  $http.get('/constants/text-content.json').then(function(res)
  {
    $scope.textcontent = res.data;
  },
  function(res)
  {
    console.log("ERROR RETRIEVING TEXT CONTENT");
  });

  // THIS CODE HELPS THE bindToHeight DIRECTIVE BY TELLING ANGULAR TO REEVALUATE ON WINDOW RESIZE
  angular.element($window).bind('resize', function () {
    $scope.$apply();
  });

 // I reeeeeeeally really really don't like the magic number nature of this, but it'll have to do for now.
 // TODO: Change these magic numbers to next digest cycle maybe?
  var applyTwice = function(){ 
      setTimeout(function() {
        $scope.$apply();
      }, 50); 
      setTimeout(function() {
        $scope.$apply();
      }, 850);
  }
 
  $scope.$on('absoluteSizeChange', applyTwice);
  $scope.$on('$stateChangeStart', applyTwice);

  $scope.getSanitizedVideoURL = function (piece)
  {
    return $sce.trustAsResourceUrl(piece.video);
  };
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
                // I don't like this any more than you do.
                if (/**newValue != oldValue**/ true) {
                    elem.css(attributes[0], newValue);
                }
            });
        }
    };
});