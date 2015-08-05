'use strict';

/**
 * @ngdoc service
 * @name frontApp.securityFactory
 * @description
 * # securityFactory
 * Factory in the frontApp.
 */
 angular.module('parionsApp')
 	.factory('misesFactory', ['$resource','serverUrl', function ($resource, serverUrl) {

 	return {
 		'resourceMises' :  $resource(serverUrl + '/matchs/mises',{}, {
 			mises : {
 				method : 'GET',
 				url : serverUrl + '/matchs/mises'
 			}
 		}),
 		'resourceScores' : $resource(serverUrl + '/matchs/scores',{},{
 			scores : {
 				method : 'GET',
 				url : serverUrl + '/matchs/scores'
 			}
 		}),
 	};
}]);
