var admin_directives = angular.module('admin_directives', []);
admin_directives.directive('adminNavbar', function() {
return {
restrict : 'A',
template : '<body data-spy="scroll" data-target=".navbar-custom" id="ha" >'
    +'<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">'
     +   '<div class="container" ng-controller="HomeAdminController">'
      +      '<div class="navbar-header page-scroll">'
       +         '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">'
        +            '<i class="fa fa-bars"></i>'
         +      '</button>'
          +      '<a class="navbar-brand" href="#/home_admin">'
           +         '<h1 class="naslov1">eSavjetovaliste</h1>'
            +    '</a>'
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
+ '</body>'
};
});