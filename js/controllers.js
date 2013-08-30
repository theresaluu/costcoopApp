'use strict';

/* Controllers */


angular.module('costcoop.controllers', []).
	controller('ItemCtrl', [
	  	'$scope', 
	  	'angularFire', 
	  	function($scope, angularFire) {
	  		var url = 'https://costcoop.firebaseio.com/item';
	  		var promise = angularFire(url, $scope, 'item', {names:[], qtys:[], prices:[], dates:[], acceptances:[]});

	  		promise.then(function(){
	  			
	  			$scope.postItem = function(){
	  	

	  				if($scope.item.names){
	  					$scope.item.names.push({name:$scope.name, qty:$scope.qty, price:$scope.price, date:$scope.date, acceptance: false});
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






