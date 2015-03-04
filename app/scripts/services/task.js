'use strict';

angular.module('queueSpangularApp')

.factory('Task', ['$firebase', function ($firebase) {
	var impurgRef = new Firebase('https://visitask.firebaseio.com/impurg');
	var impnouRef = new Firebase('https://visitask.firebaseio.com/impnou');
	var uniurgRef = new Firebase('https://visitask.firebaseio.com/uniurg');
	var uninouRef = new Firebase('https://visitask.firebaseio.com/uninou');

	//AngularFire reference to Firebase data
	var impurgSync = $firebase(impurgRef);
	var impnouSync = $firebase(impnouRef);
	var uniurgSync = $firebase(uniurgRef);
	var uninouSync = $firebase(uninouRef);

	//Insert each additional task for each quadrant into array
	var eachTaskInEachQuadrant = {
				impurg: impurgSync.$asArray(),
				impnou: impnouSync.$asArray(),
				uniurg: uniurgSync.$asArray(),
				uninou: uninouSync.$asArray()
		};

	var ref = new Firebase('https://visitask.firebaseio.com');
	ref.authWithOAuthPopup('google', function(error, authData) {
	  if (error) {
	    console.log('Login Failed!', error);
	  } else {
	    console.log('Authenticated successfully with payload:', authData);
			var impurgRef = new Firebase('https://visitask.firebaseio.com/users').child(authData.uid).child('impurg');
			var impnouRef = new Firebase('https://visitask.firebaseio.com/users').child(authData.uid).child('impnou');
			var uniurgRef = new Firebase('https://visitask.firebaseio.com/users').child(authData.uid).child('uniurg');
			var uninouRef = new Firebase('https://visitask.firebaseio.com/users').child(authData.uid).child('uninou');
			
			//AngularFire reference to Firebase data
			var impurgSync = $firebase(impurgRef);
			var impnouSync = $firebase(impnouRef);
			var uniurgSync = $firebase(uniurgRef);
			var uninouSync = $firebase(uninouRef);  

			eachTaskInEachQuadrant.impurg = impurgSync.$asArray(),
			eachTaskInEachQuadrant.impnou = impnouSync.$asArray(),
			eachTaskInEachQuadrant.uniurg = uniurgSync.$asArray(),
			eachTaskInEachQuadrant.uninou = uninouSync.$asArray();
	  }
	});	
	return eachTaskInEachQuadrant;
}]);




