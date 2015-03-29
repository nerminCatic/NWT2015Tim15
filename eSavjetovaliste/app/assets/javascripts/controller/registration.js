registration.controller('RegistrationControler', ['$scope','$http', function($scope,$http){
    $scope.registerUser = function(){
        $http.post('/api/users', {
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