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
		date: (new Date(2015, 5)).getTime(),
		sref: 'The-Insomniac',
		content: ''
	};
	var project4 = {
		name: 'TileTraveler',
		placecard: 'composition-01.jpg',
		date: (new Date(2013, 11)).getTime();
		sref: 'TileTraveler',
		content: ''
	};
	var project2 =  {
		name: 'GIS Lookup System',
		placecard: 'photoshoot-09.jpg',
		date: (new Date(2015, 5)).getTime(),
		sref: 'GIS',
		content: ''
	};
	var project3 =	{
		name: 'Protein Cavity Finder',
		placecard: 'cube-13.jpg',
		date: (new Date(2015, 4)).getTime(),
		sref: 'Protein-Cavity-Finder',
		content: ''
	};
	self.activeProject = '';
	self.projectItems = [project1, project2, project3, project4];
	self.projectFormData = [];
	self.newProject = {name: '', placecard: '', month: 1 + (new Date()).getMonth(), year: 1970 +  (new Date()).getYear(), sref: '', content: ''};

	for (var i = 0; i < self.projectItems.length; i++)
	{
		var projectItem = projectItems[i];
		self.projectFormData["_"+projectItem.sref] = {};
		self.projectFormData["_"+projectItem.sref].name = projectItem.name;
		self.projectFormData["_"+projectItem.sref].placecard = projectItem.placecard;
		self.projectFormData["_"+projectItem.sref].date = projectItem.date;
		self.projectFormData["_"+projectItem.sref].sref = projectItem.sref;
		self.projectFormData["_"+projectItem.sref].content = projectItem.content;
	}

	$scope.$watch('$stateParams.project', function(val)	{
		if (val != null)
		{
			var newProject = self.getFromSref(val);
			self.activeProject = newProject;
		}
	});

	self.getFromSref = function (sref)	{
		var theProject self.projectItems.filter(function(obj)
		{
			return obj.sref === sref;
		})
		return ((theProject[0] === null || theProject[0] === undefined) ? null : theProject[0]);
	};
	self.resetProjectForm = function(sref)  {
		var modelProject = self.getFromSref(name);
    	self.projectFormData["_" + sref].name = modelProject.name;
    	self.projectFormData["_" + sref].placecard = modelProject.placecard;
    	self.projectFormData["_" + sref].date = modelProject.date;
    	self.projectFormData["_" + sref].sref = modelProject.sref;
    	self.projectFormData["_" + sref].content = modelProject.content;
  	}
  	self.updateProject = function(sref)
  	{
    	var projectFields = self.projectFormData["_"+sref];
    	var updatedProject = {name: projectFields.name, placecard: projectFields.placecard, date: projectFields.date, sref: projectFields.sref, content: projectFields.content};
    	console.log("Updated: \n", updatedProject);
  	}
  	self.deleteProject = function(date)
  	{
    	var delProject = self.getFromSref(name);
    	if($window.confirm("Delete project '" + delProject.title + "'?"))
    	{
      		console.log("Deleted: \n", delProject);
    	}
  	}
  	self.submitProject = function() {
    	var projectFields = self.projectFormData["_"+sref];
    	var newProject = {name: projectFields.name, placecard: projectFields.placecard, date: projectFields.date, sref: projectFields.sref, content: projectFields.content};
    	console.log("Submitting: ", newProject);
  	}

}])