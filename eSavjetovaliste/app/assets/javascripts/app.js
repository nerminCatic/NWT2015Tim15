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
      when('/inputs-password-reset', {
        templateUrl: "inputs-password-reset.html",
        controller: 'InsertPwdForResetController'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }
]);