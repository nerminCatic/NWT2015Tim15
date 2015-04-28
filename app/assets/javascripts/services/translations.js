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
    'LOGOUT': 'Log out', 
    'OFFICE': 'Main Office', 
    'NAME' : 'Name',
    'EMAIL' : 'Email adress', 
    'TYPEF' : 'Type of feedback',
    'MSG' : 'Message',
    'SMSG' : 'Send Message',
    'FHEAD' : 'Your feedback is very important to us!',
    'OHEAD' : 'Online orders',
    'AHEAD' : 'Need advice?', 
    'OPT' : 'Options',
    'USRMNG' : 'User management',
    'USRMNGD' : 'Options of adding new users, deleting and editing existing users enabled.',
    'FEEDBACKMNG' : 'Feedback management',
    'FEEDBACKMNGD' : 'Options of managing the list of all feedback messages and selecting certain feedback messages for presentation on home page.',
    'CATEGORYMNG' : 'Category management',
    'CATEGORYMNGD' : 'Options of adding new categories, deleting and editing existing categories enabled.',
    'SORT' : 'Order by',
    'SEARCH' : 'Search',
    'QUESTION' : 'Question',
    'DSC' : 'Description',
    'CATEGORY' : 'Category',
    'SQUESTION' : 'Send question'
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
    'LOGOUT': 'Odjava', 
    'OFFICE': 'Glavna poslovnica',
    'NAME' : 'Ime',
    'EMAIL' : 'Email adresa',
    'TYPEF' : 'Tip povratne informacije',
    'MSG' : 'Poruka',
    'SMSG' : 'Pošalji poruku',
    'FHEAD' : 'Vaše mišljenje nam je jako važno!',
    'OHEAD' : 'Online narudžbe', 
    'AHEAD' : 'Da li vam je potreban savjet?',
    'OPT' : 'Opcije',
    'USRMNG' : 'Upravljanje korisnicima',
    'USRMNGD' : 'Omogućene opcije dodavanja novih, te brisanja i uređivanja već postojećih korisnika.',
    'FEEDBACKMNG' : 'Upravljanje povratnim informacijama',
    'FEEDBACKMNGD' : 'Omogućeno pregledanje svih primljenih povratinih informacija od korisnika, te odabir određenih za prikaz na početnoj stranici.',
    'CATEGORYMNG' : 'Upravljanje kategorijama',
    'CATEGORYMNGD' : 'Omogućeno pregledanje, dodavanje novih i brisanje već postojećih kategorija.',
    'SORT' : 'Sortiraj po:',
    'SEARCH' : 'Pretraga:',
    'QUESTION' : 'Pitanje',
    'DSC' : 'Opis',
    'CATEGORY' : 'Kategorija',
    'SQUESTION' : 'Pošalji pitanje'
  });
 
  $translateProvider.preferredLanguage('bs');
// Sholud be added: https://medium.com/ruby-on-rails/maintainable-i18n-with-rails-and-angularjs-f3b2542a1980
/* $translateProvider.useStaticFilesLoader({
    prefix: 'locales/',
    suffix: '.json'
  });
*/
}]);