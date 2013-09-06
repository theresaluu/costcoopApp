'use strict';

/* Controllers */


angular.module('costcoop.controllers', []).
	controller('ItemCtrl', [
	  	'$scope', 
	  	'angularFire', 
	  	'$cookies',
	  	function($scope, angularFire, $cookies) {

	  		function log(something){
	  			console.log(something)
	  		}
	  		var url = 'https://costcoop.firebaseio.com/items';
	  		var promise = angularFire(url, $scope, 'items', []);
	  		var id = Math.floor((1+Math.random()) * 0x10000);

	  		$cookies.myCookie = $cookies.myCookie || "superCookie" + Math.floor(Math.random()*10000)

	  		console.log($cookies.myCookie)

	  		promise.then(function(){
	  			$scope.showMe = false;
	  			$scope.divyAccept = true;
	  			$scope.divyMessage = "Divy Accept";

	  			$scope.postItem = function(){
	  				 if($scope.items){
	  					$scope.items.push({item:$scope.name, 
	  										qty:$scope.qty,
	  										price:$scope.price, 
	  										date:$scope.date, 
	  										poster: $scope.posterName,
	  										passPhrase: $scope.posterPassPhrase,
	  										currentCookie: $cookies.myCookie
	  										});
	  				 }
	  				console.log(this.id);
	  				$scope.name = '';
		  			$scope.qty = '';
		  			$scope.price = '';
		  			$scope.date = '';
		  			$scope.posterPassPhrase ="";
		  			$scope.posterName = "";
		  		}

		  		$scope.currentUser = function(items){
		  			list = []
		  		 	$scope.items.forEach(function(item){
		  		 		if(item.currentCookie == $cookies.myCookie){
		  		 			list.push(item)
		  		 		}

		  		 	})
		  		 	if(list.length == 0){
		  		 		alert("have you posted before? please, tell us your name and passphrase")
		  		 	}
		  			return items;
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
		  			//if user id == item.poster.id, then render acceptor's name and number


		  		}

	  		});
		  	
		}]);






