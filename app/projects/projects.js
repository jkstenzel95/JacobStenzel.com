'use strict';

angular.module('projects', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('projects', {
  	url: '/projects',
    controller: 'ProjectsCtrl'
  })
  .state('projects.project',	{
  	url: '/projects/:project',
  	controller: 'ProjectCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', function($scope) {
	var project1 = {
		name: 'The Insomniac',
		placecard: 'cube-18.jpg',
		sref: 'The-Insomniac'
	};
	var project2 = {
		name: 'TileTraveler',
		placecard: 'composition-01.jpg',
		sref: 'TileTraveler'
	};
	var project3 =  {
		name: 'GIS Lookup System',
		placecard: 'photoshoot-09.jpg',
		sref: 'GIS'
	};
	var project4 =	{
		name: 'Protein Cavity Finder',
		placecard: 'cube-13.jpg',
		sref: 'protein-cavity-finder'
	}
	$scope.projectItems = [project1, project2, project3, project4];
}])

.controller('ProjectCtrl', [function()	{

}]);