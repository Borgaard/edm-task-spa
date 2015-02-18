'use strict';

angular.module('queueSpangularApp')

.factory('Task', ['scope', '$firebase', function ($scope, $firebase) {
	var ref = new Firebase('https://visitask.firebaseio.com/data');
	//AngularFire reference to Firebase data
	var sync = $firebase(ref);
	//download ze data into local object
	$scope.data = sync.$asObject();
	//sync object with three-way data binding JS, DOM and Firebase together
	//$asObject creates sync object, then $bindTo() binds to $scope variable
	//
	syncObject.$bindTo($scope, 'data');
	
	var Task = {
				impurg: [],
				impnou: [],
				uniurg: [],
				uninou: []
		};
	return Task;
}]);
