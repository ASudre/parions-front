'use strict';

/**
 * @ngdoc overview
 * @name parionsApp
 * @description
 * # parionsApp
 *
 * Main module of the application.
 */
angular
  .module('parionsApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/login', {
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
      });
  }]);