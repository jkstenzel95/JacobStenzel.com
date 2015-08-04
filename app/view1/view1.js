'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('view1', {
  	url: '/view1',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);