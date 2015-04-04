'use strict';
var esavjetovaliste = angular.module('esavjetovaliste',[
  'templates',
  'ngRoute',
  'controllers'
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
      otherwise({
        redirectTo: '/login'
      });
  }
]);