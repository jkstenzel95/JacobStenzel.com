'use strict';

// Declare app level module which depends on views, and components
angular.module('admin', [
  'ngAnimate',
  'admin-blog'
])

.controller('AdminCtrl', ['$scope', '$http', function($scope, $http) {
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