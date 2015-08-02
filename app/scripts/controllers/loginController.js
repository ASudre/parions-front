'use strict';

angular.module('parionsApp')
  .controller('loginController',[ '$scope','securityFactory','$location', function ($scope,securityFactory,$location) {

	$scope.login = function(){
		securityFactory.resourceSignIn.signIn($scope.user,function(){
			$location.path('/accueil');
		});
	};

}]);
