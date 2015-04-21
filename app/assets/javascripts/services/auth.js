var auth = angular.module('auth', ['ngResource']);

// Auth = Login service
auth.factory('AuthService', function($http, $q, $rootScope, AuthToken,$location) {
  return {
    login: function(email, password) {
      var d = $q.defer();
      $http.post('/api/auth', {
        email: email,
        password: password
      }).success(function(resp) {
        AuthToken.set(resp.auth_token, resp.user_name, resp.user_role);
        d.resolve(resp.user);
        console.log("Uspjesno logovan. Dobiven token: " + resp.auth_token);
        $location.path('/home'); 
      }).error(function(resp) {
        console.log($rootScope);
       // $scope.errorMsg ="Netačni podaci!";
        d.reject(resp.error);
        alert("Pogrešni login podaci!"); 
        $location.path('/login');
      });
      return d.promise;
    }
  };
});

auth.service('AuthToken', function() {
  this.set = function(token, name, role) { 
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("role", role);
  };
  this.get = function() { return localStorage.getItem("token"); };
  this.getRole = function() { return localStorage.getItem("role"); };
  this.getUser = function() { return localStorage.getItem("name"); };
  this.unset =  function() { 
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  }
});

auth.factory("AuthInterceptor", function($q, $injector, $location) {
  return {
    // This will be called on every outgoing http request
    request: function(config) {
      var AuthToken = $injector.get("AuthToken");
      var token = AuthToken.get();
      config.headers = config.headers || {};
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config || $q.when(config);
    },
    responseError: function(response) {
      var matchesAuthenticatePath = response.config && response.config.url.match(new RegExp('/api/auth'));
      console.log("ne valja");
      if (!matchesAuthenticatePath) {
        console.log("nemate pravo pristupa");
        $location.path('/login');
      }
      $location.path('/login');
      return $q.reject(response);
    }
  };
});

auth.config(function($httpProvider) {
  return $httpProvider.interceptors.push("AuthInterceptor");
});