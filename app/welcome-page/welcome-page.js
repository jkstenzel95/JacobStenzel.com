'use strict';

angular.module('welcome-page', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'partials/welcome-page',
    controller: 'WelcomePageCtrl'
  });
}])

.controller('WelcomePageCtrl', [function() {

}]);