'use strict';

angular.module('admin-blog', [])

.controller('AdminBlogCtrl', ['$scope', function($scope) {
  var tzString = "America/New_York";

	var entry1 = {
		title: 'My Second Post',
		date: new Date(2015, 3, 16).getTime(),
		tags: [],
		content: ''
	};

  var entry2 = {
    title: 'This Just In!',
    date: new Date().getTime(),
    tags: ['important', 'wibbly-wobbly', 'music', 'site'],
    content: ''
  };

  var entry3 = {
    title: 'My Third Post',
    date: new Date(2015, 0, 18).getTime(),
    tags: [],
    content: ''
  };

  var entry4 = {
    title: 'Hello World!',
    date: new Date(2014, 11, 27).getTime(),
    tags: [],
    content: ''
  };

  var blogEntries = [entry1, entry2, entry3, entry4];
  var tagWeights = {};
  var tagSizes = {};
  var yearMapping = {};
  var yearExpansion = {};
  var tagCountMax = 0;

  for (var i = 0; i < blogEntries.length; i++)
  {
    var blogEntry = blogEntries[i];
    for (var j = 0; j < blogEntry.tags.length; j++)
    {
      var tag = blogEntry.tags[j];
      if (tagWeights[tag] == null)
      {
        tagWeights[tag] = 1;
      }
      else
      {
        tagWeights[tag]++;
      }

      if (tagWeights[tag] > tagCountMax)
      {
        tagCountMax = tagWeights[tag];
      }
    }
    var postMoment = moment.tz(blogEntry.date, tzString);
    if (yearMapping[postMoment.year()] == null)
    {
      yearMapping[postMoment.year()] = {};
      yearExpansion[postMoment.year()] = false;
    }

    if (yearMapping[postMoment.year()][postMoment.month()] == null)
    {
      yearMapping[postMoment.year()][postMoment.month()] = 1;
    }
    else
    {
      yearMapping[postMoment.year()][postMoment.month()]++;
    }
  }

	$scope.blogEntries = blogEntries;
  $scope.tagWeights = tagWeights;
  $scope.tagSizes = tagSizes;
  $scope.yearMapping = yearMapping;
  $scope.yearExpansion = yearExpansion;
  $scope.getFormattedDate = function(entry)
  {
    return moment.tz(entry.date, tzString).format("MMMM D, YYYY");
  };
  $scope.getPostCountFromYear = function(year)
  {
    var sum = 0;
    for (var month in yearMapping[year])
    {
      sum += yearMapping[year][month];
    }
    return sum;
  };
  $scope.getMonthString = function(monthNum)
  {
    switch(monthNum)
    {
      case '0':
        return "January";
      case '1':
        return "Febuary";
      case '2':
        return "March";
      case '3':
        return "April";
      case '4':
        return "May";
      case '5':
        return "June";
      case '6':
        return "July";
      case '7':
        return "August";
      case '8':
        return "September";
      case '9':
        return "October";
      case '10':
        return "November";
      case '11':
        return "December";
      default:
        return "";
    }
  }
}])

.controller('BlogEntryCtrl', ['$scope', function($scope) {

}])