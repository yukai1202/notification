"use strict";

angular.module('notiApp').controller('homeCtrl', ['$scope', '$http',  
	
	function ($scope, $http) { 
		  
		 $scope.message = "";

		 $scope.send = function(){
		 	if($scope.message === "")
		 		return;
		 	var obj ={"msg":$scope.message};
		 	$http.post("http://localhost:8088/send", JSON.stringify(obj)).then(function(response){
	            if(response.status === 200 && response.statusText === "OK"){
	                //alert(response.data);
	                 $scope.message = "";
	            }
	       }, function(err){
	            alert(err);
	       });
		}
	}

]);