var services = angular.module('services', ['ngResource']);
// Link - how to use CRUD services
// http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/


// CRUD services for User
services.factory('User', function($resource) {
  return $resource('/api/users/:id');
});
// Registration service for User
services.factory('UserRegister', function ($resource) {
  return $resource('api/users/register', {}, {
    register: { method: 'POST' }
  });
});

// Delete user - trenutno se ne koristi, ali je ispravna!
services.factory('DeleteUser', function ($resource) { 
  return $resource('api/users/:id', {id:'@id'}, {
    destroy: { method: 'DELETE' }
  });
});

// Change password
services.factory('ChangePassword', function ($resource) {
     return $resource('/api/users/change_password',   {password: '@password', 
         email: '@email', new_password: '@new_password' , new_password_confirmation: '@new_password_confirmation'}, {
          change_password: { method: 'POST' }
          });
});
// Password reset service
services.factory('PassReset', function ($resource) {
  return $resource('api/passwordresets', {email: '@email'}, {
    create: { method: 'POST' }
  });
});
// Imputs passwords  reset service
services.factory('InputsPassReset', function ($resource) { 
  return $resource('api/passwordresets/:id', {id:'@id', password: '@password', password_confirmation: '@password_confirmation'}, {
    update: { method: 'PUT' }
  });
});
// CRUD services for Category
services.factory('Category', function($resource) {
  return $resource('/api/categories/:id');
});
// CRUD services for Question
services.factory('Question', function($resource) {
  return $resource('/api/questions/:id');
});
// send Feedback
services.factory('Feedback', function($resource) {
  return $resource('/api/feedbacks', {}, {
    send: { method: 'POST' }
  });
});

// CRUD services for Reservation
services.factory('Reservation', function($resource) {
  return $resource('/api/reservations/:id');
});
// Commit for resolving error


// --------------------------------- MANAGEMENT --------------------------------


// get Feedback
services.factory('GetFeedback', ['$resource', function($resource) {
  function GetFeedback() {
    this.service = $resource('/api/feedbacks/:stockId', {stockId: '@id'});
  };
  GetFeedback.prototype.all = function() {
    return this.service.query();
  };
  return new GetFeedback;
}]);

// Managers functionality with users
services.factory('GetUser', ['$resource', function($resource) {
  function GetUser() {
    this.service = $resource('/api/users/:userId', {userId: '@id'});
  };

  GetUser.prototype.all = function() {
    return this.service.query();
  };

  GetUser.prototype.delete = function(usrId) {
    this.service.remove({userId: usrId},
    function success() {
        alert("Korisnik je uspješno izbrisan!");
    }, 
    function err() {
      alert('Došlo je do greške!');
    });   
  };
  return new GetUser;
}]);

// Managers functionality with users
services.factory('GetRole', ['$resource', function($resource) {
  function GetRole() {
    this.service = $resource('/api/roles/:roleId', {roleId: '@id'});
  };

  GetRole.prototype.all = function() {
    return this.service.query();
  };
   return new GetRole;
}]);