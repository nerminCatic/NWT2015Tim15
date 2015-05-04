var localization_directives = angular.module('localization_directives', []);

// Multiply directive for localization 
localization_directives.directive('localizationBsEn', function() {
return {
restrict : 'A',
template : '<div ng-controller="LanguageController">'
            +'<button ng-click="changeLanguage(\'bs\')">BS</button>'
            +'<button ng-click="changeLanguage(\'en\')">EN</button>'
          +'</div>'  
};
});