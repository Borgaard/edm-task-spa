'use strict';

/**
 * @ngdoc function
 * @name queueSpangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the queueSpangularApp
 */
angular.module('queueSpangularApp')
  .controller('TaskCtrl', function ($scope) {
    //each quadrant: 0, 1, 2, 3
  //   $scope.impUrgent      = [{text: 'I am impUrgent'}];
  //   $scope.impNotUrgent   = [{text: 'I am impNotUrgent'}];
  //   $scope.unimpUrgent    = [{text: 'I am unimpUrgent'}];
  //   $scope.unimpNotUrgent = [{text: 'I am unimpNotUrgent'}];
  // })

  // .controller('TaskCtrl', function ($scope) {
  	$scope.savedTask = null; //validate this in HTML
  	$scope.save = function(task) {
  		$scope.savedTask = angular.copy(task);
  	};
  });





