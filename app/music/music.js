'use strict';

angular.module('music', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('music', {
  	url: '/music',
    controller: 'MusicCtrl'
  })
  .state('music.piece',	{
  	url: '/music/:piece',
  	controller: 'PieceCtrl'
  });
}])

.controller('MusicCtrl', ['$scope', function($scope) {
	var piece1 = {
		name: 'The Insomniac',
		sref: 'The-Insomniac'
	};
	var piece2 = {
		name: 'Racing The Clock',
		sref: 'TileTraveler'
	};
	var piece3 =  {
		name: 'A Fragile State',
		sref: 'GIS'
	};
	var piece4 =	{
		name: 'Come The Winter\'s End',
		sref: 'protein-cavity-finder'
	};
	$scope.pieceItems = [piece1, piece2, piece3, piece4];
}])

.controller('PieceCtrl', [function()	{

}]);