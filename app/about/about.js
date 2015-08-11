'use strict';

angular.module('about', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('about', {
  	url: '/about',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', [function() {

}]);