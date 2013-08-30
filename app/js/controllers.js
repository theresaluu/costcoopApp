'use strict';

/* Controllers */


angular.module('costcoop.controllers', []).
	controller('ItemCtrl', [
	  	'$scope', 
	  	'angularFire', 
	  	function($scope, angularFire) {
	  		var url = 'https://costcoop.firebaseio.com/board';
	  		var promise = angularFire(url, $scope, 'board', {names:[], qtys:[], prices:[], dates:[]});

	  		promise.then(function(){
	  			
	  			$scope.postItem = function(){
	  	

	  				if($scope.board.names){
	  					$scope.board.names.push({name:$scope.name, acceptance:false});
	  				}

	  				if($scope.board.qtys){
	  					$scope.board.qtys.push();
	  				}

	  				if($scope.board.prices){
	  					$scope.board.prices.push();
	  				}

	  				if($scope.board.dates){
	  					$scope.board.dates.push();
	  				}

	  				$scope.name = '';
		  			$scope.qty = '';
		  			$scope.price = '';
		  			$scope.date = '';
		  		}

		  		// console.log("names:" + JSON.stringify($scope.costcoop.names));
	  			// console.log("names length:" + $scope.costcoop.names.length);

	  			// console.log("qtys:" + JSON.stringify($scope.costcoop.qtys));
	  			// console.log("qtys length:" + $scope.costcoop.qtys.length);

	  			// console.log("prices:" + JSON.stringify($scope.costcoop.prices));
	  			// console.log("pirces length:" + $scope.costcoop.prices.length);

	  			// console.log("dates:" + JSON.stringify($scope.costcoop.dates));
	  			// console.log("dates length:" + $scope.costcoop.dates.length);

	  		})
		  	
		}]);






