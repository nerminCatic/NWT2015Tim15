'use strict';
var controllers = angular.module('controllers', []);
//Login
controllers.controller('LoginController', ['$scope','Session','$location',
    function($scope, Session, $location){
        $scope.loginUser = function() {
            Session.create({email: $scope.user.email, password: $scope.user.password});
            alert("Uspješno ste prijavljeni!");
            $location.path('/home');
        }
        $scope.openRegistration = function() {
            $location.path('/register');
        }
        $scope.openPassReset = function() {
            $location.path('/password-reset');
        }
}]);
//Registration
controllers.controller('RegistrationController', ['$scope','UserRegister','$location',
    function($scope, UserRegister, $location){
        $scope.registerUser = function(){
            UserRegister.register({user: $scope.user});
            alert($scope.user.name + ", vaš zahtjev za registracijom je primljen!");
            $location.path('/login');
        }
}]);
//Password reset
controllers.controller('ResetController', ['$scope', 'PassReset', '$location', 
    function($scope, PassReset ,$location){
      $scope.doReset = function(){
        PassReset.create({email: $scope.user.email});
        alert("Vaš zahtjev za obnovu šifre je primljen!");
        $location.path('/login');
    }
}]);
