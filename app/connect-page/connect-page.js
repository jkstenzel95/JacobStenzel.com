'use strict';

angular.module('connect-page', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('connect', {
  	url: '/connect',
    controller: 'ConnectCtrl'
  });
}])

.controller('ConnectCtrl', [function() {

}]);