'use strict';
var esavjetovaliste = angular.module('esavjetovaliste',[
  'templates',
  'ngRoute',
  'controllers',
  'services',
  'auth',
  'translations'
]);

esavjetovaliste.config([ '$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: "login.html",
        //controller: 'LoginController'
      }).
      when('/register', {
        templateUrl: "register.html",
        controller: 'RegistrationController'
      }).
      when('/home', {
        templateUrl: "home.html",
      //  controller: 'HomeController'
      }).
      when('/home_admin', {
        templateUrl: "home_admin.html",
        controller: 'HomeAdminController'
      }).
      when('/feedback_admin', {
        templateUrl: "feedback_admin.html",
        controller: 'FeedbackCtrl'
      }).
      when('/category_admin', {
        templateUrl: "category_admin.html",
        //controller: 'FeedbackAdminController'
      }).
      when('/user_management', {
        templateUrl: "user_management.html",
        //controller: 'UserManagementController'
      }).
      when('/password-reset', {
        templateUrl: "password-reset.html",
        controller: 'ResetController'
      }).
      when('/inputs-password-reset/:id', { 
        // :id znaci da ce biti prosljedjivan id (token za reset u ovom slucaju)
        templateUrl: "inputs-password-reset.html",
        controller: 'InsertPwdForResetController'
      }).
      when('/changepass',{
         templateUrl: "changepass.html",
         controller: 'ChangePassController'
      }).
      when('/register_user_by_manager',{
         templateUrl: "register_user_by_manager.html",
         controller: 'RegistrationUserByManagerController'
      }).
      when('/edit_user_by_manager',{
         templateUrl: "edit_user_by_manager.html",
         controller: 'EditUserFromManagerController'
      }).
      when('/questions',{
        templateUrl: "questions.html",
        //controller: 'ChangePassController'
      }).
      when('/add_question',{
        templateUrl: "add_question.html",
        //controller: 'ChangePassController'
      }).
      when('/new_category',{
          templateUrl: "new_category.html",
          controller: 'ChangePassController'
        }).
      otherwise({
        redirectTo: '/login'
      });
  }
]);
//Komentar