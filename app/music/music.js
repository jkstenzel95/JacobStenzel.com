'use strict';

angular.module('music', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('music', {
  	url: '/music',
    controller: 'MusicCtrl'
  })
  .state('music.piece',	{
  	url: '/:piece',
  	controller: 'MusicCtrl'
  });
}])

.controller('MusicCtrl', ['$scope', '$sce', function($scope, $sce) {
	var self = this;
	var piece1 = {
		name: 'The Insomniac',
		sref: 'The-Insomniac',
		video: 'https://www.youtube.com/embed/WlFNjR2TSu4'
	};
	var piece2 = {
		name: 'Racing The Clock',
		sref: 'Racing-The-Clock'
	};
	var piece3 =  {
		name: 'A Fragile State',
		sref: 'A-Fragile-State'
	};
	var piece4 =	{
		name: 'Come The Winter\'s End',
		sref: 'Come-The-Winter\'s-End'
	};
	self.getFromSref = function (sref)	{
		return self.pieceItems.filter(function(obj)
		{
			return obj.sref === sref;
		})[0];

	};
	self.pieceItems = [piece1, piece2, piece3, piece4];
	self.activePiece = '';
	self.getSanitizedVideoURL = function (piece)
	{
		return $sce.trustAsResourceUrl(piece.video);
	};

	// Watching for a route change so I can search it up based on its sref and set pieceItems accordingly
	$scope.$watch('$stateParams.piece', function(val)	{
		if (val != null)
		{
			var newPiece = self.getFromSref(val);
			if (newPiece.video !== undefined) {
				$sce.trustAsResourceUrl(newPiece.video);
			}
			self.activePiece = newPiece;
		}
	});
}])