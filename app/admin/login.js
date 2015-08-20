'use strict';

angular.module('login', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
  	url: '/admin/login',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [function() {

}]);