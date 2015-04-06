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
//Navigation bar home page
controllers.controller('NavBarController', ['$scope','$location',
    function($scope, $location){
        $scope.openChangePass = function() {
            $location.path('/changepass');
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
        alert("Vaš zahtjev za obnovu šifre je primljen! Upute za obnovu šifre bit će Vam poslane na email");
        $location.path('/inputs-password-reset');
    }
}]);

// Confirm Reset - Input passworda
controllers.controller('InsertPwdForResetController', ['$scope', '$routeParams', 'InputsPassReset', '$location',
    function($scope, $routeParams, InputsPassReset, $location){
      $scope.doResetConfirm = function(){
        var idi = $routeParams.id;
        var obj = new Object();
        obj.password = $scope.user.password;
        obj.password_confirmation = $scope.user.password_confirmation;
        var jsonString= JSON.stringify(obj);
        
        // Posto se radi o metodi PUT, na ovaj nacin se prosljedjuje id, a zatim i objekat (u nasem slucaju json)
        InputsPassReset.update({ id:idi }, jsonString);
        alert('Lozinka je uspješno resetovana.');
        $location.path('/login');    
    }
}]);