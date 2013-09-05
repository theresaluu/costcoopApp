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
	  			$scope.showMe = false;
	  			$scope.divyAccept = true;
	  			$scope.divyMessage = "Divy Accept";

	  			$scope.postItem = function(){
	  				 if($scope.items){
	  					$scope.items.push({item:$scope.name, qty:$scope.qty, price:$scope.price, date:$scope.date, poster:$scope.poster});
	  				 }
	  				$scope.name = '';
		  			$scope.qty = '';
		  			$scope.price = '';
		  			$scope.date = '';
		  			$scope.poster = '';
		  		}

		  		$scope.toggle = function(){
		  			this.showMe = !this.showMe;
		  			if(this.showMe){
		  				this.divyMessage = "Cancel Divy";
		  			} else {this.divyMessage = "Divy Accept"}
		  			
		  		}

		  		$scope.acceptItem = function(){
		  			this.item.divied = true;
		  			this.item.buddy = this.item.buddy || [{acceptor: this.acceptor, phone: this.phone}];
		  			this.phone = "";
		  			this.acceptor = "";
		  			this.toggle();
		  			this.divyAccept = false;
		  	
		  		}

		  		$scope.notify = function() {
		  			//once there is a phone number, notify the owner with the number of the accepter
		  		}

	  		});
		  	
		}]);






