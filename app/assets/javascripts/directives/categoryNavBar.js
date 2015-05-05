
var category_directives = angular.module('category_directives', []);
category_directives.directive('categoryNavBar', function() {
return {
restrict : 'A',
template : '<table class="table table-hover table-condensed tabela1" ng-controller="SearchCategoriesControler">'
+ '  <thead>'
+'   <tr>'
+'  <th>Naziv</th>'
            +'<th>Opis</th>'
       +'   </tr>'
+'    </thead>'
+'    <tbody>'
   +'   <tr ng-repeat="category in categories | filter:query | orderBy:orderProp">'
   +'     <td> {{category.name}}</td>'
     +'   <td> {{category.description}}</td>'
     +'   <td>'
       +'   <div class="actions"> '
           +' <button class="btn btn-primary btn-usr-mng" ng-click="updateUser(stock.id, $index)"  ng-disabled="myForm.$invalid">Izmijeni</button>'
       +'   </div>'
        +'  <div class="actions" >'
        +'    <button class="btn btn-primary btn-usr-mng" ng-click="deleteCategory(category.id, $index)"  ng-disabled="myForm.$invalid">Obriši</button>'
       +'   </div>'
       +' </td>'
     +' </tr>'
+'</table>'
};
});