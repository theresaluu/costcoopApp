'use strict';

/* Controllers */


angular.module('costcoop.controllers', []).
	controller('ItemCtrl', [
	  	'$scope', 
	  	'angularFire', 
	  	function($scope, angularFire) {
	  		$scope.items = [];
	  		$scope.waiting = {};
	  		$scope.showMe = false;
	  		$scope.divyAccept = true;
	  		$scope.divyMessage = "Divy Accept";

	  		var items = new Firebase('https://costcoop.firebaseio.com/items');
	  		var promise = angularFire(items, $scope, 'items', []);
	 

	  		promise.then(function(){

	  			var waiting = new Firebase('https://costcoop.firebaseio.com/waiting');
	  			var promise = angularFire(waiting, $scope, 'waiting', {});
	  			

	  			$scope.postItem = function(){
	  				 if($scope.waiting){
	  					$scope.waiting.push({
	  						name: $scope.name, 
	  						qty: $scope.qty, 
	  						price: $scope.price, 
	  						date: $scope.date, 
	  						poster: $scope.poster, 
	  						phone: $scope.phone
	  					});
	  				 }
	  				$scope.name = '';
		  			$scope.qty = '';
		  			$scope.price = '';
		  			$scope.date = '';
		  			$scope.poster = '';
		  			$scope.phone = '';
		  		}

		  		$scope.toggle = function(){
		  			this.showMe = !this.showMe;
		  			if(this.showMe){
		  				this.divyMessage = "Cancel Divy";
		  			} else {this.divyMessage = "Divy Accept"}
		  			
		  		}

		  		$scope.acceptItem = function(thing){
		  			$scope.waiting.splice(thing, 1);
		  			$scope.items.push({
		  				name: $scope.name,
		  				qty: $scope.qty,
		  				price: $scope.price
		  			});
		  			this.item.divied = true;
		  			this.phone = "";
		  			this.acceptor = "";
		  			this.toggle();
		  			this.divyAccept = false;
		  			
		  	
		  		}

	  		});
		  	
		}]);






