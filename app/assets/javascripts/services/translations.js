var translations = angular.module('translations', ['pascalprecht.translate']);

translations.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'REMEMBER_ME': 'Remember me',
    'LOGIN': 'Log in',
    'REGISTER':'Register',
    'FORGOT_PASS':'Forgot password?',
    'WELCOME':'Welcome',
    'HOME': 'Home',
    'ABOUT': 'About',
    'CHANGE_PASS': 'Change password',
    'LOGOUT': 'Log out'
  })
  .translations('bs', {
    'REMEMBER_ME': 'Zapamti me',
    'LOGIN': 'Prijavite se',
    'REGISTER':'Registruj se',
    'FORGOT_PASS':'Zaboravio šifru?',
    'WELCOME':'Dobro došli',
    'HOME': 'Početna',
    'ABOUT': 'O nama',
    'CHANGE_PASS': 'Promjena šifre',
    'LOGOUT': 'Odjava'
  });
 
  $translateProvider.preferredLanguage('bs');
// Sholud be added: https://medium.com/ruby-on-rails/maintainable-i18n-with-rails-and-angularjs-f3b2542a1980
/* $translateProvider.useStaticFilesLoader({
    prefix: 'locales/',
    suffix: '.json'
  });
*/
}]);