'use strict';

//Controllers

var controllers = angular.module('controllers', []);

controllers.controller('RegistrationControler', ['$scope','$http', function($scope,$http){
    $scope.registerUser = function(){
        $http.post('/api/users/register', {
         	user: $scope.user}).
        	    success(function(data, status, headers, config) {
         	    // this callback will be called asynchronously
        	    // when the response is available
                alert(data.name + ", uspješno ste registrovani!");
        	    alert(data.toSource());
    	}).
     	error(function(data, status, headers, config) {
        	    // called asynchronously if an error occurs
        	    // or server returns response with an error status.
        	    alert(data.toSource());
	});
    };
}]);

controllers.controller('LoginControler', ['$scope','$http', function($scope,$http){
    $scope.loginUser = function(){

$http.post('/api/sessions', {email: $scope.user.email, password: $scope.user.password,
            session: $scope.user}).success(function (data, status, headers, config) {
            alert($scope.user.email + ", uspješno ste prijavljeni!");
            alert(data.toSource());
            //$window.location='/static_pages/home';
        });
        error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert(data.toSource());
    });
    };
}]);

controllers.controller('ResetControler', ['$scope', '$location',
  function($scope, $location) {
    // DOdati metod i servis
    $scope.doReset = function() {
        alert('Link za reset lozinke Vam je poslan na email.');
    }
    error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert(data.toSource());
    });
}]);