'use strict';

angular.module('parionsApp')
  .controller('loginController',[ '$scope','securityFactory', function ($scope,securityFactory) {

	$scope.login = function(){
		securityFactory.resourceSignIn.signIn($scope.user,function(user){
			console.log(user);
		});
	};

}]);
