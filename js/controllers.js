'use strict';

/* Controllers */


angular.module('costcoop.controllers', []).
	controller('ItemCtrl', [
	  	'$scope', 
	  	'angularFire', 
	  	'$cookies',
	  	function($scope, angularFire, $cookies) {
	  		var url = 'https://costcoop.firebaseio.com/items';
	  		var promise = angularFire(url, $scope, 'items', []);
	 

	  		promise.then(function(){
	  			
	  			$scope.postItem = function(){
	  			

	  				 if($scope.items){
	  					$scope.items.push({name:$scope.name, qty:$scope.qty, price:$scope.price, date:$scope.date});
	  				 }

	  				$scope.name = '';
		  			$scope.qty = '';
		  			$scope.price = '';
		  			$scope.date = '';
		  		}

		  		$scope.acceptItem = function(){
		  			//the accepting thing here
		  			$("#avail").click(function(){
		  				$('#test').dialog();
		  				return false;
		  			});
		  		}

	  		});
		  	
		}]);






