'use strict';

angular.module('parionsApp')
  .controller('loginController',[ '$scope','securityFactory','$location','$rootScope', function ($scope,securityFactory,$location,$rootScope) {

	$scope.login = function(){
		securityFactory.resourceSignIn.signIn($scope.user,function(user){
			console.log(user);
			$rootScope.connectedUser = user ; 
			$location.path('/accueil');
		});
	};

}]);
