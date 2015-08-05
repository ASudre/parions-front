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
  .config(['$routeProvider','$httpProvider',function ($routeProvider,$httpProvider) {
    
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
  }]);