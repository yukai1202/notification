"use strict";

angular.module('notiApp').controller('homeCtrl', ['$scope', '$http', '$anchorScroll', '$location', '$timeout',
	function ($scope, $http, $anchorScroll, $location, $timeout) { 
		var socket;

		var obj = {username: "aaaa"};
		



		$scope.init = function(){
			$http.get("/connect", JSON.stringify(obj)).then(function(response){
	            if(response.status === 200 && response.statusText === "OK"){
	                //alert(response.data);
	                socket = io("https://noti-fishyk.c9users.io/");
	                 
	                socket.on('receiveNotification', $scope.receiveNotification);
	                socket.on('connected', $scope.connected);
	                
	                 

	            }
	       }, function(err){
	            alert(err);
	       });
		};


		$scope.message = [];

		$scope.status = false;

		$scope.connected = function(msg){
			$scope.status = true;
			$scope.$apply();
		};

		$scope.receiveNotification = function(msg){
			$scope.message.unshift(JSON.parse(msg));

			//$location.hash('bottom');
        	
			$scope.$apply();


		};

		$scope.remove = function(obj){
			var index = $scope.message.indexOf(obj);

			$scope.message.splice(index, 1);
		}

		$scope.init();



	}

]);