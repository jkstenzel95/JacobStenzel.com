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
		//mask: ,
		styles: '-webkit-clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); '
		+'clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); '
		+'background-color: #DADDEE;',
		sref: 'The-Insomniac'
	};
	var piece2 = {
		name: 'Racing The Clock',
		//mask: ,
		styles: '-webkit-clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%); '
		+'clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%); '
		+'background-color: #DADDEE;',
		sref: 'TileTraveler'
	};
	var piece3 =  {
		name: 'A Fragile State',
		//mask: ,
		styles: '-webkit-clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%); '
		+'clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%); '
		+'background-color: #DADDEE;',
		sref: 'GIS'
	};
	var piece4 =	{
		name: 'Come The Winter\'s End',
		//mask: ,
		styles: '-webkit-clip-path: ellipse(50% 50% at 50% 50%); '
		+'clip-path: ellipse(50% 50% at 50% 50%); '
		+'background-color: #DADDEE;',
		sref: 'protein-cavity-finder'
	};
	$scope.pieceItems = [piece1, piece2, piece3, piece4];
}])

.controller('PieceCtrl', [function()	{

}]);