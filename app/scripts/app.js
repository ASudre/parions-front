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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
