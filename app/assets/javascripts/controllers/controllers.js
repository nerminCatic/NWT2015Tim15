'use strict';
var controllers = angular.module('controllers', []);
//Login
controllers.controller('LoginController', ['$scope','AuthService','AuthToken','$location',
    function($scope, AuthService, AuthToken, $location){
        if(AuthToken.get()) {
            $location.path('/home');
            console.log("Vec ste logovani. Token: " + AuthToken.get());
        }
        $scope.loginUser = function() {
            AuthService.login($scope.user.email, $scope.user.password);
        }
        $scope.openRegistration = function() {
            $location.path('/register');
        }
        $scope.openPassReset = function() {
            $location.path('/password-reset');
        }
}]);
// Home controller
controllers.controller('HomeController', ['$scope','$location','AuthToken',
    function($scope, $location, AuthToken) {
        if(!AuthToken.get()) {
            $location.path('/login');
            console.log("Morate se logovati!");
        }
        $scope.userName = AuthToken.getUser();
        $scope.openChangePass = function() {
            $location.path('/changepass');
        }
        $scope.logout = function() {
            AuthToken.unset();
            console.log("Log out. Token: " + AuthToken.get());
            $location.path('/login');
        }
}]);
// Home Admin controller
controllers.controller('HomeAdminController', ['$scope','$location','AuthToken',
    function($scope, $location, AuthToken) {
        if(!AuthToken.get()) {
            $location.path('/login');
            console.log("Morate se logovati!");
        }
        $scope.userName = AuthToken.getUser();
        $scope.openChangePass = function() {
            $location.path('/changepass');
        }
        $scope.logout = function() {
            AuthToken.unset();
            console.log("Log out. Token: " + AuthToken.get());
            $location.path('/login');
        }
        $scope.openFeedback = function() {
            $location.path('/feedback_admin');
        }
        $scope.openUserManagement = function() {
            $location.path('/user_management');
        }
}]);
// Change password
controllers.controller('ChangePassController', ['$scope','ChangePassword', '$location', 'AuthToken' ,
    function($scope,ChangePassword,$location,AuthToken) {
        if(!AuthToken.get()) {
            $location.path('/login');
            console.log("Morate se logovati!");
        }
        $scope.changePass = function(){
         ChangePassword.change_password ({password: $scope.user.password, 
         email: $scope.user.email, new_password: $scope.user.new_password, new_password_confirmation: $scope.user.new_password_confirmation}, 
            function success() {
                alert("Šifra je uspješno promijenjena!");
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
//Send Feedback
controllers.controller('FeedbackController', ['$scope','Feedback','$location',
    function($scope, Feedback, $location){
       $scope.forms = ['Compliment','Complaint','Suggestion','Comment'];
        $scope.sendFeedback = function(){
            Feedback.send({feedback: $scope.feedback},
                function success() {
                    alert($scope.feedback.name + ", Vaša poruka je primljena, hvala Vam!");
                    $scope.feedback = null;
                }, 
                function err() {
                alert('Pogrešni podaci!');
            });
        }
}]);
// Feedback admin
controllers.controller('FeedbackCtrl', ['$scope', 'GetFeedback', function($scope, GetFeedback) {
  $scope.feedbacks = GetFeedback.all();
}]);