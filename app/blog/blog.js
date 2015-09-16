'use strict';

angular.module('blog', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('blog', {
  	url: '/blog',
    controller: 'BlogCtrl'
  })
  .state('blog.entry',	{
  	url: '/:entry',
  	controller: 'BlogCtrl'
  });
}])

.controller('BlogCtrl', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
  var self = this;
  var tzString = "America/New_York";

  var entry1 = {
    title: 'Hello World!',
    date: new Date(2015, 9, 15).getTime(),
    tags: ['site','plans','introduction','coding','blog'],
    content: "Hello fellow human being! This is my site, and this is my blog... well those are both actually half truths, which theoretically should sum up to a full truth and put me in the clear, but that's probably not the case, so I'll explain the situation.\nThis site is very much still under construction. What you're reading right now is actually a rough draft of what is to come. If you check out the code on GitHub, you may notice some content hard-coded into the project (Like, for example, this very post). That's because a fair amount of this site will be interacting with a MongoDB database I haven't set up quite yet. There is an 'admin' portion of this site that I'm currently working on where I will be able to add new projects, pieces, and blog posts. Unfortunately, for the time being, we must both grimace at the fact that we currently have content in our controllers.\nSeeing as the career fair is upon us here at Virginia Tech, I thought it appropriate to pretty up this rough draft for employers and recruiters as best as I can. You'll notice I've fleshed out a fair bit of content so you can get a taste of both who I am and what I've learned this summer about web development. For those interested, what I'm working with here at JacobStenzel.com is the MEAN Stack, where MEAN stands for Mongoose.js, Express.js, Angular.js, and Node.js. I'm still learning a lot, but I've really enjoyed the journey thus far!\nKeep an eye out for the finished site in the months to come, folks!\nJacob Stenzel"
  };

  var entry2 = {
    title: "A Little About This Blog...",
    date: new Date(2015, 3, 16).getTime(),
    tags: ['blog','music','coding','walkthrough'],
    content: "In creating this site, I've decided to maintain a blog to catalogue my experiences, achievements, adventures and muses. One can expect there to be a lot of music geekery and project updates.\nAs previously stated, this isn't the final product, so I thought I would use this opportunity to demo this blog's functionality thus far... Read these posts backward in time to follow my walkthrough!"
  };

  var entry3 = {
    title: "Let's Clear Something Up",
    date: new Date(2015, 0, 18).getTime(),
    tags: ['blog','walkthrough'],
    content: "These dates are definitely not correct, the tags are not necessarily accurate, and the number of posts really isn't necessary. They're here to demonstrate some neat little features that only become apparent when we have a fair amount of dates, tags, and posts. In the posts before this one, I will describe some of these nifty features."
  };

  var entry4 = {
    title: "Traveling Through Time",
    date: new Date(2014, 11, 27).getTime(),
    tags: ['blog','walkthrough','filter'],
    content: "No need for a police box or a Delorean, should you want to view posts from a certain month, you can do that! Take a look at the sidebar (or the box on top if you're reading this on mobile). If you click on a year and then a month, you can filter posts by the date of posting. Nifty, huh?"
  };

  var entry5 = {
    title: "Not To Change The Topic...",
    date: new Date(2014, 11, 22).getTime(),
    tags: ['blog','walkthrough','filter'],
    content: "...but you can, should you choose! If you want to filter posts by tag to see entries of a certain topic, just go to the sidebar (or the box on top if you're reading this on mobile) and click on any tag in the tag cloud at the bottom. This will apply a filter to the blog to give you posts you're interested in."
  };

  var entry6 = {
    title: "Future Plans",
    date: new Date(2013, 10, 24).getTime(),
    tags: ['blog','site','plans'],
    content: "Like I said, there are a few bugs or features to implement that I'll note here:\nYou may notice that the fuzzy background to this site feathers at the end when the scrollbar is enabled, or that things bleed through the page's logo space at the top. I'm looking into that at the moment, so bear with me.\nLike I said, all of these projects, and pieces, and posts are hard-coded. With any luck, I should soon have a system in place that allows me to post new projects, pieces, and posts via an admin panel. That's very next on the list!\nI'd like some pagination on this blog, because with any luck, it's going to get big. Really big.\n Also expect some prettying up! In the meantime, this is what I'm running with, however.\nI hope you enjoy this rough draft however, and keep on the lookout for the final product that is to come!"
  };

  var blogEntries = [entry1, entry2, entry3, entry4, entry5, entry6];
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

  for (var tag in tagWeights) {
    if (tagWeights.hasOwnProperty(tag))
    {
      var tagWeight = tagWeights[tag];
      if (tagWeight / tagCountMax >= 7/8)
      {
        tagSizes[tag] = '30px';
      }
      else if (tagWeight / tagCountMax >= 7/8)
      {
        tagSizes[tag] = '27.5px';
      }
      else if (tagWeight / tagCountMax >= 6/8)
      {
        tagSizes[tag] = '25px';
      }
      else if (tagWeight / tagCountMax >= 5/8)
      {
        tagSizes[tag] = '22.5px';
      }
      else if (tagWeight / tagCountMax >= 4/8)
      {
        tagSizes[tag] = '20px';
      }
      else if (tagWeight / tagCountMax >= 3/8)
      {
        tagSizes[tag] = '17.5px';
      }
      else if (tagWeight / tagCountMax >= 2/8)
      {
        tagSizes[tag] = '15px';
      }
      else if (tagWeight / tagCountMax >= 1/8)
      {
        tagSizes[tag] = '12.5px';
      }
      else
      {
        tagSizes[tag] = '10px';
      }
    }
  };

  self.blogFilterCondition = '';
	self.blogEntries = blogEntries;
  self.blogFormData = [];
  self.tagWeights = tagWeights;
  self.tagSizes = tagSizes;
  self.yearMapping = yearMapping;
  self.yearExpansion = yearExpansion;
  self.activeEntry = null;

  $scope.$watch('blogCtrl.blogFilterCondition', function()  {
    $scope.$emit("absoluteSizeChange");
  });

  self.getFormattedDate = function(entry)
  {
    return entry === null || entry === undefined ? null : moment.tz(entry.date, tzString).format("MMMM D, YYYY");
  };
  self.getPostCountFromYear = function(year)
  {
    var sum = 0;
    for (var month in yearMapping[year])
    {
      sum += yearMapping[year][month];
    }
    return sum;
  };
  self.getMonthString = function(monthNum)
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
  };
  self.dateToMillis = function(year, day, month)
  {
    return (new Date(year, day, month)).getTime();
  };
  self.tagIsString = function()
  {
    return (typeof self.blogFilterCondition === 'string') && self.blogFilterCondition !== '';
  }
  self.tagIsNumber = function()
  {
    return (typeof self.blogFilterCondition === 'number');
  }
  self.tagToDateString = function() {
    return ((typeof self.blogFilterCondition === 'number') ? moment.tz(self.blogFilterCondition, tzString).format("MMMM YYYY") : '');
  }

  self.getFromDate = function (date)  {
    var theEntry = self.blogEntries.filter(function(obj)
    {
      return obj.date === parseFloat(date);
    });
    return ((theEntry[0] === null || theEntry[0] === undefined) ? null : theEntry[0]);
  };
  
  $scope.$watch('$stateParams.entry', function(val) {
    if (val != null)
    {
      var newEntry = self.getFromDate(val);
      self.activeEntry = newEntry;
      if (newEntry == null)
      {
        $state.go('blog');
      }
    }
  });

}])

.filter('blogFilter', [function()  {
  return function(items, condition) {
    var filtered = [];
    if (condition === '')
    {
      return items;
    }
    else if (typeof condition === 'string')
    {
      items.forEach (function(item)
      {
        if (item.tags.indexOf(condition) >= 0)
        {
          filtered.push(item);
        }
      });
    }
    else if (typeof condition === 'number')
    {
      var checkDate = new Date(condition);
      var checkMonth = checkDate.getMonth();
      var checkYear = 1900 + checkDate.getYear();
      var startTime = (new Date(checkYear, checkMonth, 1)).getTime();
      var endTime = (new Date(checkMonth == 11 ? checkYear + 1 : checkYear, (checkMonth + 1) % 12, 1)).getTime();
      items.forEach (function(item)
      {
        if (item.date >= startTime && item.date < endTime)
        {
          filtered.push(item);
        }
      });
    }
    return filtered;
  }
}]);