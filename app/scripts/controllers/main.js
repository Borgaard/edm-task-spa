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
  		$scope.impurg = Task.impurg;
  		$scope.task = function() {
  		$scope.impurg.push({desc: $scope.newTask})
  		$scope.newTask = '';
  	};
  }])

  .controller('impnouCtrl', ['$scope', 'Task', function ($scope, Task) {
  		$scope.impnou = Task.impnou;
  		$scope.task = function() {
  		$scope.taskStatus = 'Your important and not urgent task is: ' + $scope.impnou + '!';
  		$scope.impnou = '';
  	};
  }])

  .controller('uniurgCtrl', ['$scope', function ($scope) {
  	var uniurg = this;
  	uniurg.task = [];
  }])

  .controller('uninouCtrl', ['$scope', function ($scope) {
  	var uninou = this;
  	uniurg.task = [];
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

