var services = angular.module('services', ['ngResource']);
// Link - how to use CRUD services
// http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/


// CRUD services for User
services.factory('GetMeUser', function($resource) {
  return $resource('/api/users/:id', {id:'@id'}, {
    dajUsera: { method: 'GET' }
  });
});

// For sharing data about User between controlers (SearchUsersControler and EditUserByManagerController)
services.factory('SharedUser', function () {
    //return { User: '' };
    var savedData = {}
    function set(data) {
      savedData = data;
    }
    function get() {
     return savedData;
    }

    return {
     set: set,
     get: get
    }
});

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

services.factory('CreateCategory', function ($resource) {
     return $resource('/api/categories',   {name: '@name', 
         description: '@description'}, {
          create: { method: 'POST' }
          });
});

services.factory('UpdateCategory', function ($resource) {
     return $resource('/api/categories',   {name: '@name', 
         description: '@description'}, {
          create: { method: 'PUT' }
          });
});

services.factory('CreateRole', function ($resource) {
     return $resource('/api/roles',   {name: '@name', 
         description: '@description'}, {
          create: { method: 'POST' }
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
  return $resource('api/passwordresets/change_pass', {token:'@token', password: '@password', password_confirmation: '@password_confirmation'}, {
    update: { method: 'POST' }
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
// Comments
services.factory('Comment', function($resource) {
  return $resource('/api/questions/:questionId/comments/:id', {questionId:'questionId',id:'@id'});
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

  GetUser.prototype.getUserForUpdate = function(usrId) {
    alert(usrId);
    return $resource('/api/users/:userId', {userId: usrId});
  };

  return new GetUser;
}]);

// Imputs passwords  reset service
services.factory('UpdateUserByManager', function ($resource) { 
  return $resource('api/users/:id', {id:'@id', name: '@name', surname: '@surname', 
    role_id: '@role_id', phone: '@phone', job: '@job', email: '@email', adress: '@adress', confirmed: '@confirmed'}, {
    update: { method: 'PUT' }
  });
});

// Managers functionality with categories
services.factory('GetCategory', ['$resource', function($resource) {
  function GetCategory() {
    this.service = $resource('/api/categories/:categoryId', {categoryId: '@id'});
  };

  GetCategory.prototype.all = function() {
    return this.service.query();
  };
 
GetCategory.prototype.delete = function(catgoryId) {
    this.service.remove({categoryId: catgoryId},
    function success() {
        alert("Kategorija je uspješno izbrisana!");
    }, 
    function err() {
      alert('Došlo je do greške!');
    });   
  };

  return new GetCategory;
}]);

// Managers functionality with roles
services.factory('GetRole', ['$resource', function($resource) {
  function GetRole() {
    this.service = $resource('/api/roles/:roleId', {roleId: '@id'});
  };

  GetRole.prototype.all = function() {
    return this.service.query();
  };
 
GetRole.prototype.delete = function(rlid) {
    this.service.remove({roleId: rlid},
    function success() {
        alert("Rola je uspješno izbrisana!");
    }, 
    function err() {
      alert('Došlo je do greške!');
    });   
  };
  return new GetRole;
}]);

services.factory('DeleteQuestion', function ($resource) { 
  return $resource('api/questions/:id', {id:'@id'}, {
    destroy: { method: 'DELETE' }
  });
});

//file upload
services.factory('uploadsFactory', function ($http) {
  return {
    all: function(question_id) {
      return $http.get('api/questions/' + question_id + '/uploads');
    },
    create: function(question_id, file) {
      return $http.post('api/questions/' + question_id + '/uploads', { file: file });
    }
  }
});

