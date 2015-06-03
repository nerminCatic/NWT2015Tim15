var translations = angular.module('translations', ['pascalprecht.translate']);

translations.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'REMEMBER_ME': 'Remember me',
    'LOGIN': 'Log in',
    'REGISTER':'Registration',
    'REG':'Register',
    'FORGOT_PASS':'Forgot password?',
    'WELCOME':'Welcome',
    'HOME': 'Home',
    'ABOUT': 'About',
    'CHANGE_PASS': 'Change password',
    'LOGOUT': 'Log out', 
    'OFFICE': 'Main Office', 
    'NAME' : 'Name',
    'SURNAME':'Surname',
    'JOB':'Job',
    'EMAIL' : 'Email adress', 
    'TYPEF' : 'Type of feedback',
    'MSG' : 'Message',
    'SMSG' : 'Send Message',
    'FHEAD' : 'Your feedback is very important to us!',
    'OHEAD' : 'Online orders',
    'ORDERS':'Orders',
    'AHEAD' : 'Need advice?', 
    'OPT' : 'Options',
    'USRMNG' : 'User management',
    'USRMNGD' : 'Options of adding new users, deleting and editing existing users enabled.',
    'FEEDBACKMNG' : 'Feedback management',
    'FEEDBACKMNGD' : 'Options of managing the list of all feedback messages and selecting certain feedback messages for presentation on home page.',
    'CATEGORYMNG' : 'Category management',
    'CATEGORYMNGD' : 'Options of adding new categories, deleting and editing existing categories enabled.',
    'UPDCTG':'Edit category',
    'SORT' : 'Order by',
    'SEARCH' : 'Search',
    'QUESTION' : 'Question',
    'QUESTIONS' : 'Questions',
    'DSC' : 'Description',
    'CATEGORY' : 'Category',
    'ECATEGORY':'Enter new category',
    'SQUESTION' : 'Send question',
    'USER' : 'User',
    'UROLE':'Role entry',
    'USRROLE':'Role management',
    'USRROLED':'Options of adding new roles, deleting and editing existing roles enabled.',
    'UPROLE':'Edit role',
    'ORDNAME':'Name',
    'ORDSURNAME':'Surname',
    'ACTION':'Action',
    'ADDNEWUSER':'Add new user:',
    'ADDUSER':'Add user',
    'CHANGE':'Change',
    'DELETE':'Delete',
    'BAN':'Ban',
    'UNBAN':'Unban',
    'STATUS':'Status',
    'APPOINTMENTDATE':'Appointment',
    'DOCTOR':'Doctor',
    'SENDRESERVATION':'Reservation',
    'EDITUSRMNG':'Edit user information',
    'DOCTORS':'Our doctors',
    'GRAF':'Charts',
    'GRAFD':'Charts about administration and management',
    'ADMIN':'Administration',
    'PROFESSION':'Profession'
  })
  .translations('bs', {
    'REMEMBER_ME': 'Zapamti me',
    'LOGIN': 'Prijavite se',
    'REGISTER':'Registruj se',
    'REG':'Registracija',
    'FORGOT_PASS':'Zaboravio šifru?',
    'WELCOME':'Dobro došli',
    'HOME': 'Početna',
    'ABOUT': 'O nama',
    'CHANGE_PASS': 'Promjena šifre',
    'LOGOUT': 'Odjava', 
    'OFFICE': 'Glavna poslovnica',
    'NAME' : 'Ime',
    'SURNAME':'Prezime',
    'JOB':'Posao',
    'EMAIL' : 'Email adresa',
    'TYPEF' : 'Tip povratne informacije',
    'MSG' : 'Poruka',
    'SMSG' : 'Pošalji poruku',
    'FHEAD' : 'Vaše mišljenje nam je jako važno!',
    'OHEAD' : 'Online narudžbe', 
    'ORDERS':'Narudžbe',
    'AHEAD' : 'Da li vam je potreban savjet?',
    'OPT' : 'Opcije',
    'USRMNG' : 'Upravljanje korisnicima',
    'USRMNGD' : 'Omogućene opcije dodavanja novih, te brisanja i uređivanja već postojećih korisnika.',
    'FEEDBACKMNG' : 'Upravljanje povratnim informacijama',
    'FEEDBACKMNGD' : 'Omogućeno pregledanje svih primljenih povratinih informacija od korisnika, te odabir određenih za prikaz na početnoj stranici.',
    'CATEGORYMNG' : 'Upravljanje kategorijama',
    'CATEGORYMNGD' : 'Omogućeno pregledanje, dodavanje novih i brisanje već postojećih kategorija.',
    'UPDCTG':'Izmjena kategorije',
    'SORT' : 'Sortiraj po:',
    'SEARCH' : 'Pretraga:',
    'QUESTION' : 'Pitanje',
    'QUESTIONS' : 'Pitanja',
    'DSC' : 'Opis',
    'CATEGORY' : 'Kategorija',
    'ECATEGORY':'Unos kategorije',
    'SQUESTION' : 'Pošalji pitanje',
    'USER' : 'Korisnik',
    'UROLE':'Unos role',
    'USRROLE':'Upravljanje rolama',
    'USRROLED':'Omogućeno pregledanje, dodavanje novih i brisanje već postojećih rola.',
    'UPROLE':'Izmjena role',
    'ORDNAME':'Imenima',
    'ORDSURNAME':'Prezimenima',
    'ACTION':'Akcija',
    'ADDNEWUSER':'Dodavanje novog korisnika:',
    'ADDUSER':'Dodaj korisnika',
    'CHANGE':'Izmijeni',
    'DELETE':'Obriši',
    'BAN':'Ban',
    'UNBAN':'Unban',
    'STATUS':'Status',
    'APPOINTMENTDATE':'Termin',
    'DOCTOR':'Doktor',
    'SENDRESERVATION':'Rezerviši',
    'EDITUSRMNG':'Izmjena podataka o korisniku',
    'DOCTORS':'Doktori',
    'GRAF':'Grafici',
    'GRAFD':'Omogućeno pregledanje grafika vezanih za administraciju i upravljanje.',
    'ADMIN':'Administracija',
    'PROFESSION':'Profesija'
  });
 
  $translateProvider.preferredLanguage('bs');
// Sholud be added: https://medium.com/ruby-on-rails/maintainable-i18n-with-rails-and-angularjs-f3b2542a1980
/* $translateProvider.useStaticFilesLoader({
    prefix: 'locales/',
    suffix: '.json'
  });
*/
}]);