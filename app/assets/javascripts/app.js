'use strict';
var esavjetovaliste = angular.module('esavjetovaliste',[
  'templates',
  'ngRoute',
  'controllers',
  'services',
  'auth',
  'translations',
  'feedback_directives',
  'navbar_directives',
  'localization_directives',
  'category_directives',
  'angularFileUpload',
  'alerts_directives',
 'nvd3'
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
      when('/inputs-password-reset', { 
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
         controller: 'EditUserByManagerController'
      }).
      when('/questions',{
        templateUrl: "questions.html",
        //controller: 'ChangePassController'
      }).
      when('/add_question',{
        templateUrl: "add_question.html",
        //controller: 'ChangePassController'
      }).
      when('/questions/:id',{
        templateUrl: "show_question.html",
        //controller: 'ChangePassController'
      }).
      when('/questions/:id/resources', {
        templateUrl: "resources.html",
        controller: "ResourcesCtrl"
      }).
      when('/questions/:id/new_resource', {
        templateUrl: 'new_resource.html',
        controller: 'NewResourceCtrl'
      }).
      when('/new_category',{
          templateUrl: "new_category.html",
          controller: 'ChangePassController'
        }).
      when('/update_category',{
          templateUrl: "update_category.html",
        }).
      when('/role_admin',{
          templateUrl: "role_admin.html",
          
        }).
      when('/add_new_role',{
          templateUrl: "add_new_role.html",
          
        }).
       when('/charts',{
          templateUrl: "charts.html",
          
        }).
      otherwise({
        redirectTo: '/login'
      });
  }
]);
//Komentar