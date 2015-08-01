'use strict';

/**
 * @ngdoc service
 * @name frontApp.securityFactory
 * @description
 * # securityFactory
 * Factory in the frontApp.
 */
 angular.module('frontApp')
 	.factory('parionsApp', ['$resource','serverUrl', function ($resource, serverUrl) {

 	return {
 		'resourceSignIn' :  $resource(serverUrl + '/security/signIn',{}, {
 			signIn : {
 				method : 'POST',
 				url : serverUrl + '/security/signIn'
 			}
 		})
 	};
}]);
