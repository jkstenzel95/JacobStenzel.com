'use strict';

angular.module('isLoggedIn', [])

.factory('isLoggedIn', ['$http', function($http) {
	return function()	{
		return $http.get('/isLoggedIn')
	}
}]);
