'use strict';

/**
 * @ngdoc function
 * @name queueSpangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the queueSpangularApp
 */
angular.module('queueSpangularApp')
		.controller('allTaskCtrl', function ($scope, Task) {
			$scope.tasks = Task;
		})

    .controller('impurgCtrl', ['$scope', 'Task', function ($scope, Task) {
    	$scope.newTask = '';
  		$scope.task = Task; //points directly to object
  		$scope.addTask = function() { //for current user with session, add new task to this quadrant
  		Task.impurg.$add({desc: $scope.newTask});
  		$scope.newTask = '';
  	};
  }])

  .controller('impnouCtrl', ['$scope', 'Task', function ($scope, Task) {
  		$scope.newTask = '';
  		$scope.task = Task;
  		$scope.addTask = function() {
  		Task.impnou.$add({desc: $scope.newTask});
  		$scope.newTask = '';
  	};
  }])

  .controller('uniurgCtrl', ['$scope', 'Task', function ($scope, Task) {
      $scope.newTask = '';
  		$scope.task = Task;
  		$scope.addTask = function() {
  		Task.uniurg.$add({desc: $scope.newTask});
  		$scope.newTask = '';
  	};
  }])

  .controller('uninouCtrl', ['$scope', 'Task', function ($scope, Task) {
      $scope.newTask = '';
  		$scope.task = Task;
  		$scope.addTask = function() {
  		Task.uninou.$add({desc: $scope.newTask});
  		$scope.newTask = '';
  	};
  }]);

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

