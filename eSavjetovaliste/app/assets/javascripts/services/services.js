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
// Log in service
services.factory('Session', function ($resource) {
  return $resource('api/sessions', {email: '@email', password: '@password'}, {
    	create: { method: 'POST' }
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
// CRUD services for Feedback
services.factory('Feedback', function($resource) {
  return $resource('/api/feedbacks/:id');
});
// CRUD services for Reservation
services.factory('Reservation', function($resource) {
  return $resource('/api/reservations/:id');
});
