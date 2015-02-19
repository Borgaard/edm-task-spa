'use strict';

/**
 * @ngdoc function
 * @name queueSpangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the queueSpangularApp
 */
angular.module('queueSpangularApp')
		// .controller('allTaskCtrl', ['$scope', '$firebase', 'Task', function ($scope, $firebase, Task) {
		// 	var ref = new Firebase('https://visitask.firebaseio.com/data');
		// 	//AngularFire reference to Firebase data
		// 	var sync = $firebase(ref);
		// 	//download ze data into local object
		// 	var syncObject = sync.$asObject();
		// 	// $scope.data = sync.$asObject(); //above replaces this as three-way data binding
		// 	//sync object with three-way data binding JS, DOM and Firebase together
		// 	//$asObject creates sync object, then $bindTo() binds to $scope variable
		// 	syncObject.$bindTo($scope, 'data');

		// 	$scope.tasks = Task;
		// }])

    .controller('impurgCtrl', ['$scope', 'Task', function ($scope, Task) {
    	$scope.newTask = '';
  		$scope.impurg = Task.impurg;
  		$scope.task = function() {
  		$scope.impurg.push({desc: $scope.newTask});
  		$scope.newTask = '';
  	};
  }])

  .controller('impnouCtrl', ['$scope', 'Task', function ($scope, Task) {
  		$scope.newTask = '';
  		$scope.impnou = Task.impnou;
  		$scope.task = function() {
  		$scope.impnou.push({desc: $scope.newTask});
  		$scope.newTask = '';
  	};
  }])

  .controller('uniurgCtrl', ['$scope', 'Task', function ($scope, Task) {
      $scope.newTask = '';
  		$scope.uniurg = Task.uniurg;
  		$scope.task = function() {
  		$scope.uniurg.push({desc: $scope.newTask});
  		$scope.newTask = '';
  	};
  }])

  .controller('uninouCtrl', ['$scope', 'Task', function ($scope, Task) {
      $scope.newTask = '';
  		$scope.uninou = Task.uninou;
  		$scope.task = function() {
  			$scope.uninou.push({desc: $scope.newTask});
  			$scope.newTask = '';
  		};
  	}
  ]);

  // .controller('TaskCtrl', function ($scope) {
  //   //each quadrant: 0, 1, 2, 3
  // //   $scope.impUrgent      = [{text: 'I am impUrgent'}];
  // //   $scope.impNotUrgent   = [{text: 'I am impNotUrgent'}];
  // //   $scope.unimpUrgent    = [{text: 'I am unimpUrgent'}];
  // //   $scope.unimpNotUrgent = [{text: 'I am unimpNotUrgent'}];
  // // })

  // // .controller('TaskCtrl', function ($scope) {
  // 	$scope.savedTask = null; //validate this in HTML
  // 	$scope.save = function(task) {
  // 		$scope.savedTask = angular.copy(task);
  // 	};
  // })

