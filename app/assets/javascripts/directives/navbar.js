var navbar_directives = angular.module('navbar_directives', []);
navbar_directives.directive('navbar', function() {
return {
  restrict : 'A',
  template : '<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">'
  + '<div class="localization-bs-en" localization-bs-en></div>'
  +   '<div class="container" ng-controller="HomeAdminController">'
  +      '<div class="navbar-header page-scroll">'
  +         '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">'
  +            '<i class="fa fa-bars"></i>'
  +      '</button>'
  +      '<a class="navbar-brand" href="#/home_admin">'
  +         '<h1 class="naslov1">eSavjetovaliste</h1>'
  +      '</a>'
  +        '</div>'
  +        '<div class="collapse navbar-collapse navbar-right navbar-main-collapse">'
  +         '<ul class="nav navbar-nav">'
  +          '<li class="active"><a href>{{ "HOME" | translate }}</a></li>'
  +         '<li><a href>{{ "ABOUT" | translate }}</a></li>'
  +        '<li><a href ng-click="openChangePass()">{{ "CHANGE_PASS" | translate }}</a></li>'
  +       '<li><a href ng-click="logout()">{{ "LOGOUT" | translate }}</a></li>'
  +          '</ul>'
  +        '</div>'
  +     '</div>'
  + '</nav>'
  };
});