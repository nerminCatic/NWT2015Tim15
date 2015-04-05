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
// change password
controllers.controller('ChangePassController', ['$scope','$http', '$location',
    function($scope,$http,$location)
        {
        $scope.changePass = function(){
        $http.post('/api/users/change_password', {password: $scope.user.password, 
         email: $scope.user.email, new_password: $scope.user.new_password, new_password_confirmation: $scope.user.new_password_confirmation}).
        success(function(data, status, headers, config) {
                    alert(data.name + ", vaš zahtjev za promjenom passworda je primljen!");
                    $location.path('/login');
                }).
                error(function(data, status, headers, config) {
                        alert(data.toSource());
                });
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
//Reset passworda - input email-a
controllers.controller('ResetController', ['$scope', 'PassReset', '$location', 
    function($scope, PassReset ,$location){
      $scope.doReset = function(){
        PassReset.create({email: $scope.user.email});
        alert("Vaš zahtjev za obnovu šifre je primljen!");
        $location.path('/inputs-password-reset');
    }
}]);

// Confirm Reset - Input passworda
controllers.controller('InsertPwdForResetController', ['$scope', '$http', '$location', 
    function($scope,$http,$location){
      $scope.doResetConfirm = function(){
        alert('1');
        // TBD i token dodati!
        ImputsPassReset.update('/api/passwordresets', {password: $scope.user.password, password_confirmation: $scope.user.password_confirmation});
                alert('Lozinka je uspješno resetovana.');
                $location.path('/login');    
    }
}]);