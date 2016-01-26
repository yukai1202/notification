var notiApp = angular.module('notiApp', [
  "ngRoute"
]);

notiApp.run(['$rootScope', '$location','$http', function ($rootScope, $location, $http) {

}]);


notiApp.controller('AppCtrl', ['$scope', function ($scope) {
    

}]);


notiApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });

}]);

 