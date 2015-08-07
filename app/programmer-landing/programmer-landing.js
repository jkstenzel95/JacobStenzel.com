'use strict';

angular.module('programmer-landing', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('programmer-landing', {
  	url: '/landing/programmer',
    controller: 'ProgrammerLandingCtrl'
  });
}])

.controller('ProgrammerLandingCtrl', [function() {

}]);