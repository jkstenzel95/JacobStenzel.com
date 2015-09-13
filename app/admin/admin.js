'use strict';

// Declare app level module which depends on views, and components
angular.module('admin', [
  'ngAnimate',
  'admin-blog'
])

.controller('AdminCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.textcontent = {};
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
  // THIS CODE HELPS THE bindToHeight DIRECTIVE BY TELLING ANGULAR TO REEVALUATE ON WINDOW RESIZE
  angular.element($window).bind('resize', function () {
    console.log("RESIZED");
    $scope.$apply();
  });

 // I reeeeeeeally really really don't like the magic number nature of this, but it'll have to do for now.
 // TODO: Change these magic numbers to next digest cycle maybe?
  var applyTwice = function(){ 
      setTimeout(function() {
        console.log("APPLYING ONCE..");
        $scope.$apply();
      }, 50); 
      setTimeout(function() {
        console.log("APPLYING TWICE");
        $scope.$apply();
      }, 850);
  };
 
  $scope.$on('absoluteSizeChange', applyTwice);
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