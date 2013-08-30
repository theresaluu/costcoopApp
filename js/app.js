// function Controller($scope) {
//   $scope.master= {};
 
//   $scope.update = function(user) {
//     $scope.master= angular.copy(user);
//   };
 
//   $scope.reset = function() {
//     $scope.user = angular.copy($scope.master);
//   };
 
//   $scope.reset();
// }



'use strict';


angular.module('costcoop', 
	[
	'firebase',
	'costcoop.controllers'
	]
	);
 
