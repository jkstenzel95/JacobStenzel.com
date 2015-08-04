'use strict';

angular.module('composer-landing', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('composer-landing', {
  	url: '/landing/composer',
    controller: 'ComposerLandingCtrl'
  });
}])

.controller('ComposerLandingCtrl', [function() {

}]);