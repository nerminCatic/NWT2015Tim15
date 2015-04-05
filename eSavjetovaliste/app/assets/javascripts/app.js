'use strict';
var esavjetovaliste = angular.module('esavjetovaliste',[
  'templates',
  'ngRoute',
  'controllers',
  'services'
]);

esavjetovaliste.config([ '$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: "login.html",
        controller: 'LoginController'
      }).
      when('/register', {
        templateUrl: "register.html",
        controller: 'RegistrationController'
      }).
      when('/home', {
        templateUrl: "home.html",
        //controller: 'HomeController'
      }).
      when('/password-reset', {
        templateUrl: "password-reset.html",
        controller: 'ResetController'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }
]);