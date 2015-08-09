'use strict';

angular.module('general-landing', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('general-landing', {
  	url: '/landing/general',
    controller: 'GeneralLandingCtrl'
  });
}])

.controller('GeneralLandingCtrl', [function() {

}]);