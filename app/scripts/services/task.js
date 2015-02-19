'use strict';

angular.module('queueSpangularApp')

.factory('Task', ['$firebase', function ($firebase) {
	var ref = new Firebase("https://visitask.firebaseio.com");
	ref.authWithOAuthPopup("google", function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});

	var impurgRef = new Firebase('https://visitask.firebaseio.com/impurg');
	var impnouRef = new Firebase('https://visitask.firebaseio.com/impnou');
	var uniurgRef = new Firebase('https://visitask.firebaseio.com/uniurg');
	var uninouRef = new Firebase('https://visitask.firebaseio.com/uninou');

	//AngularFire reference to Firebase data
	var impurgSync = $firebase(impurgRef);
	var impnouSync = $firebase(impnouRef);
	var uniurgSync = $firebase(uniurgRef);
	var uninouSync = $firebase(uninouRef);

	//download ze data into local object
	// $scope.data = sync.asArray();
	//sync object with three-way data binding JS, DOM and Firebase together
	//	$asObject creates sync object, then $bindTo() binds to $scope variable
	// syncObject.$bindTo($scope, 'data');
	
	var eachTaskInEachQuadrant = {
				impurg: impurgSync.$asArray(),
				impnou: impnouSync.$asArray(),
				uniurg: uniurgSync.$asArray(),
				uninou: uninouSync.$asArray()
		};
	return eachTaskInEachQuadrant;
}]);
