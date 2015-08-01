'use strict';

angular.module('parionsApp')
  .controller('accueilController',[ '$scope','connectedUser', function ($scope,connectedUser) {
  	console.log(connectedUser);
  	$scope.user = connectedUser;
}]);
