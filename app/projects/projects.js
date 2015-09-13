'use strict';

angular.module('projects', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('projects', {
  	url: '/projects',
    controller: 'ProjectsCtrl'
  })
  .state('projects.project',	{
  	url: '/:project',
  	controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', function($scope) {
	var self = this;
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
		sref: 'Protein-Cavity-Finder'
	}
	self.activeProject = '';
	self.projectItems = [project1, project2, project3, project4];

	self.getFromSref = function (sref)	{
		return self.projectItems.filter(function(obj)
		{
			return obj.sref === sref;
		})[0];

	};

	$scope.$watch('$stateParams.project', function(val)	{
		if (val != null)
		{
			var newProject = self.getFromSref(val);
			self.activeProject = newProject;
		}
	});

}])