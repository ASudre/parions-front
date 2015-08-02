'use strict';

angular.module('parionsApp')
  .controller('accueilController',[ '$scope','connectedUser', function ($scope,connectedUser) {
  	$scope.user = connectedUser;
}]);
