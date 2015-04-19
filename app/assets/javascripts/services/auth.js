var auth = angular.module('auth', ['ngResource']);
// Logged
auth.factory('CurrentUser', function ($resource) {
  return $resource('api/auth', {}, {
      get: { method: 'GET' }
  });
});
// Auth = Login
auth.factory('AuthService', function($http, $q, $rootScope, AuthToken,$location) {
  return {
    login: function(email, password) {
      var d = $q.defer();
      $http.post('/api/auth', {
        email: email,
        password: password
      }).success(function(resp) {
        AuthToken.set(resp.auth_token);
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
  this.set = function(token, type) { localStorage.setItem("token", token); localStorage.setItem("type", type);};
  this.get = function() { return localStorage.getItem("token"); };
  this.tipKorisnika = function() { return localStorage.getItem("type"); };
  this.unset =  function() { return localStorage.removeItem("token");}
});

auth.factory("AuthInterceptor", function($q, $injector) {
  return {
    // This will be called on every outgoing http request
    request: function(config) {
      var AuthToken = $injector.get("AuthToken");
      var token = AuthToken.get();
      config.headers = config.headers || {};
      if (token) {
        config.headers.Authorization = "Token token=" + token;
      }
      return config || $q.when(config);
    }
  };
});

auth.config(function($httpProvider) {
  return $httpProvider.interceptors.push("AuthInterceptor");
});