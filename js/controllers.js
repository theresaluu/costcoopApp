'use strict';

/* Controllers */


angular.module('costcoop.controllers', []).
	controller('ItemCtrl', [
	  	'$scope', 
	  	'angularFire', 
	  	function($scope, angularFire) {
	  		var url = 'https://costcoop.firebaseio.com/item';
	  		var promise = angularFire(url, $scope, 'item', {names:[]});

	  		promise.then(function(){
	  			
	  			$scope.postItem = function(){
	  	

	  				if($scope.item.names){
	  					$scope.item.names.push({name:$scope.name, qty:$scope.qty, price:$scope.price, date:$scope.date});
	  				}

	  				$scope.name = '';
		  			$scope.qty = '';
		  			$scope.price = '';
		  			$scope.date = '';
		  		}

	  		})
		  	
		}]);






