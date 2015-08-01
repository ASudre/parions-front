'use strict';

/**
 * @ngdoc service
 * @name frontApp.securityFactory
 * @description
 * # securityFactory
 * Factory in the frontApp.
 */
 angular.module('parionsApp')
 	.factory('securityFactory', ['$resource','serverUrl', function ($resource, serverUrl) {

 	return {
 		'resourceSignIn' :  $resource(serverUrl + '/security/signIn',{}, {
 			signIn : {
 				method : 'POST',
 				url : serverUrl + '/security/signIn'
 			}
 		}),
 		'resourceConnectedUser' : $resource(serverUrl + '/security/getConnectedUser',{},{
 			getConnectedUser : {
 				method : 'GET',
 				url : serverUrl + '/security/getConnectedUser'
 			}
 		}),
 	};
}]);
