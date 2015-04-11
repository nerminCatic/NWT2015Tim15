'use strict';
var controllers = angular.module('controllers', []);
//Login
controllers.controller('LoginController', ['$scope','Session','$location',
    function($scope, Session, $location){
        $scope.loginUser = function() {
            Session.create({email: $scope.user.email, password: $scope.user.password}, 
                function success() {
                    alert("Uspješno ste prijavljeni!");
                    $location.path('/home');
                }, 
                function err(){
                   alert("Pogrešni login podaci!"); 
                   $location.path('/login');
                });
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
        //change password form
        $scope.openChangePass = function() {
            $location.path('/changepass');
        }
        //logout
        $scope.logOut = function() {
            $location.path('/login');
        }
}]);
// change password
controllers.controller('ChangePassController', ['$scope','ChangePassword', '$location',
    function($scope,ChangePassword,$location)
        {
        $scope.changePass = function(){
         ChangePassword.change_password ({password: $scope.user.password, 
         email: $scope.user.email, new_password: $scope.user.new_password, new_password_confirmation: $scope.user.new_password_confirmation}, 
            function success() {
                alert("Vaš zahtjev za promjenom passworda je primljen!");
                $location.path('/login');
            }, 
            function err(){
                alert("Pogrešni podaci!"); 
                $location.path('/changepass');
            });
        }
    }]);
//Registration
controllers.controller('RegistrationController', ['$scope','UserRegister','$location',
    function($scope, UserRegister, $location){
        $scope.registerUser = function(){
            UserRegister.register({user: $scope.user},
                function success() {
                    alert($scope.user.name + ", vaš zahtjev za registracijom je primljen!");
                    $location.path('/login');
                }, 
                function err() {
                alert('Pogrešni podaci!');
            });
        }
}]);
//Reset passworda - input email-a
controllers.controller('ResetController', ['$scope', 'PassReset', '$location', 
    function($scope, PassReset ,$location){
      $scope.doReset = function(){
        PassReset.create({email: $scope.user.email}, 
            function success() {
                alert("Vaš zahtjev za obnovu šifre je primljen! Upute za obnovu šifre bit će Vam poslane na email");
                $location.path('/inputs-password-reset');
            }, 
            function err() {
                alert('Došlo je do greške. Molim Vas pokušajte ponovo kasnije.');
        });
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
        InputsPassReset.update({ id:idi }, jsonString, 
            function success() {
                alert('Lozinka je uspješno promijenjena.');
                $location.path('/login'); 
            }, 
            function err() {
                alert('Došlo je do tehničke greške. Rok od dva sata za promjenu šifre je istekao.');
            });
           
    }
}]);

//Komentar