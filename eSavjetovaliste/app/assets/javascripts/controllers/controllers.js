'use strict';
var controllers = angular.module('controllers', []);
//Login
controllers.controller('LoginController', ['$scope','$http','$location',
    function($scope,$http,$location){
        $scope.loginUser = function(){
            $http.post('/api/sessions', {email: $scope.user.email, password: $scope.user.password,
                session: $scope.user}).
            success(function(data, status, headers, config) {
                alert(data.name + ", uspješno ste prijavljeni!");
                $location.path('/home');
            }).
            error(function(data, status, headers, config) {
                alert("Pogrešni pristupni podaci.");
            });
        }
        $scope.openRegistration = function() {
            $location.path('/register');
        }
        $scope.openPassReset = function() {
            $location.path('/password-reset');
        }
}]);
//Registration
controllers.controller('RegistrationController', ['$scope','$http', '$location',
    function($scope,$http,$location){
        $scope.registerUser = function(){
            $http.post('/api/users/register', {user: $scope.user}).
                success(function(data, status, headers, config) {
                    alert(data.name + ", vaš zahtjev za registracijom je primljen!");
                    //$location.path('/index');
                }).
                error(function(data, status, headers, config) {
                        alert(data.toSource());
                });
        }
}]);
//Reset
controllers.controller('ResetController', ['$scope', '$http', '$location', 
    function($scope,$http,$location){
      $scope.doReset = function(){
        alert('1');
        $http.post('/api/passwordresets', {email: "nermincatic1@gmail.com"}).
            success(function (data, status, headers, config) {
                alert('Link za reset lozinke Vam je poslan na email.');
            }).
            error(function(data, status, headers, config) {
                    alert(data.toSource());
            });
    }
}]);
