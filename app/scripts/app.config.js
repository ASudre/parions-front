'use strict';

(function(){
    function config($routeProvider,$httpProvider) {

   		$httpProvider.defaults.withCredentials = true;
    	$httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';

		$routeProvider
			.when('/', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		.when('/accueil', {
			templateUrl: 'views/accueil.html',
			controller: 'accueilController',
			resolve:{
				connectedUser:['securityFactory',function(securityFactory){
				return securityFactory.resourceConnectedUser.getConnectedUser().$promise;
				}]
			}
		})
		.when('/mises', {
			templateUrl: 'views/listeMatchs.html',
			controller: 'misesController',
			resolve:{
				mises:['misesFactory',function(misesFactory){
				return misesFactory.resourceMises.mises().$promise;
				}]
			}
		});
	}

	angular.module('parionsApp').config(config);
	config.$inject = ['$routeProvider','$httpProvider'];
})();