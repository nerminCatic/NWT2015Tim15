'use strict';
var controllers = angular.module('controllers', ['ui.bootstrap']);
// Change language
controllers.controller('LanguageController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});
// Login
controllers.controller('LoginController', ['$scope','AuthService','AuthToken','$location',
    function($scope, AuthService, AuthToken, $location){
        if(AuthToken.get()) {
            if(AuthToken.getRole() == "gost")
                $location.path('/home');
            else if(AuthToken.getRole() == "menadzer")
                $location.path('/home_admin');
            console.log("Vec ste logovani. Token: " + AuthToken.get());
        }
        $scope.loginUser = function() {
            AuthService.login($scope.user.email, $scope.user.password);
        }
        $scope.openRegistration = function() {
            $location.path('/register');
        }
        $scope.openPassReset = function() {
            $location.path('/password-reset');
        }
}]);
// Home controller
controllers.controller('HomeController', ['$scope','$location','AuthToken',
    function($scope, $location, AuthToken) {
        if(!AuthToken.get()) {
            $location.path('/login');
            console.log("Morate se logovati!");
        }
        if(AuthToken.getRole() == "menadzer") $location.path('/home_admin');
        $scope.userName = AuthToken.getUser();
        $scope.openChangePass = function() {
            $location.path('/changepass');
        }
        $scope.logout = function() {
            AuthToken.unset();
            console.log("Log out. Token: " + AuthToken.get());
            $location.path('/login');
        }
}]);
controllers.controller('CreateCategoryController', ['$scope','CreateCategory', '$location',

    function($scope,CreateCategory,$location) {

        $scope.createCategoryC = function(){
         CreateCategory.create ({name: $scope.category.name, 
         description: $scope.category.description}, 
            function success() {
                alert("Kategorija uspješno kreirana!");
                $location.path('/home_admin');
            }, 
            function err(){
                alert("Pogrešni podaci!"); 
                $location.path('/new_category');
             });
        }
    }
    ]);
controllers.controller('UpdateCategoryController', ['$scope','UpdateCategory', '$location',

    function($scope,UpdateCategory,$location) {

        $scope.updateCategoryC = function(){
         UpdateCategory.update ({name: $scope.category.name, 
         description: $scope.category.description}, 
            function success() {
                alert("Kategorija uspješno izmijenjena!");
                $location.path('/home_admin');
            }, 
            function err(){
                alert("Pogrešni podaci!"); 
                $location.path('/category_admin ');
             });
        }
    }
    ]);
controllers.controller('CreateRoleController', ['$scope','CreateRole', '$location',

    function($scope,CreateRole,$location) {

        $scope.createRoleRead = function() {
            $location.path('/add_new_role');
        }

        $scope.createRoleR = function(){
         CreateRole.create ({name: $scope.role.name, 
         description: $scope.role.description}, 
            function success() {
                alert("Rola uspješno kreirana!");
                $location.path('/role_admin');
            }, 
            function err(){
                alert("Pogrešni podaci!"); 
                $location.path('/add_new_role');
             });
        }
    }
    ]);
// Home Admin controller
controllers.controller('HomeAdminController', ['$scope','$location','AuthToken',
    function($scope, $location, AuthToken) {
        if(!AuthToken.get()) {
            $location.path('/login');
            console.log("Morate se logovati!");
        }
        if(AuthToken.getRole() == "gost") $location.path('/home');
        $scope.userName = AuthToken.getUser();
        $scope.openChangePass = function() {
            $location.path('/changepass');
        }
        $scope.logout = function() {
            AuthToken.unset();
            console.log("Log out. Token: " + AuthToken.get());
            $location.path('/login');
        }
        $scope.openFeedback = function() {
            $location.path('/feedback_admin');
        }
        $scope.openUserManagement = function() {
            $location.path('/user_management');
        }
        $scope.openCategory = function() {
            $location.path('/category_admin');
        }
        $scope.openRoleManagement = function() {
            $location.path('/role_admin');
        }
        $scope.openChartManagement = function() {
            $location.path('/charts');
        }
}]);
// Change password
controllers.controller('ChangePassController', ['$scope','ChangePassword', '$location', 'AuthToken' ,
    function($scope,ChangePassword,$location,AuthToken) {
        if(!AuthToken.get()) {
            $location.path('/login');
            console.log("Morate se logovati!");
        }
        $scope.changePass = function(){
         ChangePassword.change_password ({password: $scope.user.password, 
         email: $scope.user.email, new_password: $scope.user.new_password, new_password_confirmation: $scope.user.new_password_confirmation}, 
            function success() {
                alert("Šifra je uspješno promijenjena!");
                $location.path('/login');
            }, 
            function err(){
                alert("Pogrešni podaci!"); 
                $location.path('/changepass');
            });
        }
    }]);
//Registration
controllers.controller('RegistrationController', ['$scope','UserRegister','$location',
    function($scope, UserRegister, $location){
        $scope.registerUser = function(){
            UserRegister.register({user: $scope.user},
                function success() {
                    alert($scope.user.name + ", vaš zahtjev za registracijom je primljen!");
                    $location.path('/login');
                }, 
                function err() {
                alert('Pogrešni podaci!');
                $location.path('/register');
            });
        }
}]);
//Reset passworda - input email-a
controllers.controller('ResetController', ['$scope', 'PassReset', '$location', 
    function($scope, PassReset ,$location){
      $scope.doReset = function(){
        PassReset.create({email: $scope.user.email}, 
            function success() {
                alert("Vaš zahtjev za obnovu šifre je primljen! Upute za obnovu šifre bit će Vam poslane na email");
                $location.path('/inputs-password-reset');
            }, 
            function err() {
                alert('Došlo je do greške. Molim Vas pokušajte ponovo kasnije.');
        });
    }
}]);

// Confirm Reset - Input passworda
controllers.controller('InsertPwdForResetController', ['$scope','$route', '$routeParams', 'InputsPassReset', '$location',
    function($scope, $route, $routeParams, InputsPassReset, $location){
      $scope.doResetConfirm = function(){
        var token = $routeParams.token;
        var obj = new Object();
        obj.password = $scope.user.password;
        obj.password_confirmation = $scope.user.password_confirmation;
        var jsonString= JSON.stringify(obj);
        
        // Prosljedjuje se token, a zatim i objekat (u nasem slucaju json)
        InputsPassReset.update({ token:token }, jsonString, 
            function success() {
                $route.updateParams({});
                alert($route.current.templateUrl);
                $location.path('/login'); 
            }, 
            function err() {
                $route.updateParams({
                    token: 'p'
                });
                alert('Došlo je do greške.');
            });
    }
}]);
//Send Feedback
controllers.controller('FeedbackController', ['$scope','Feedback','$location',
    function($scope, Feedback, $location){
       $scope.forms = ['Compliment','Complaint','Suggestion','Comment'];
        $scope.sendFeedback = function(){
            Feedback.send({feedback: $scope.feedback},
                function success() {
                    alert($scope.feedback.name + ", Vaša poruka je primljena, hvala Vam!");
                    $scope.feedback = null;
                }, 
                function err() {
                alert('Pogrešni podaci!');
            });
        }
}]);
// Questions controller
controllers.controller('QuestionsController', ['$scope', 'Category', 'Question', 'DeleteQuestion','AuthToken','$location',
    function($scope, Category, Question, DeleteQuestion, AuthToken, $location) {
      $scope.categories = Category.query();
      $scope.questions = Question.query();
      $scope.question = new Question();
      $scope.createQuestion = function() {
        $scope.question.category_id = $scope.category.id;
        Question.save($scope.question,
            function success() {
                var user = AuthToken.getUser();
                alert(user +", Vaše pitanje je dodano.");
                $location.path('/questions');
                $scope.question= null;
            }, 
            function err() {
                alert('Desila se greška pri unosu, pokušajte ponovo.');
                $location.path('/add_question');
            });
      }
      $scope.newQuestion = function() {
        $location.path('/add_question');
      }
      $scope.openQuestions = function() {
        $location.path('/questions');
      }
      $scope.showQuestion = function(question_id) {
        $location.path('/questions/'+question_id);
      }
      // ne radi
      $scope.deleteQuestion= function(id, idx) {
        $scope.questions.splice(idx, 1);
        DeleteQuestion.destroy({id: id},
            function success() {
                alert("Izbrisano");
                $location.path('/questions');
            }, 
            function err() {
                alert('Greška!');
            });
      }
}]);
// Comments controller
// Questions controller
controllers.controller('CommentsController', ['$scope','AuthToken','Comment', 'Question','$routeParams','$location',
    function($scope, AuthToken, Comment, Question, $routeParams, $location) {
       // $scope.client = Clients.get({id:$routeParams.clientId})
        //$scope.bills = ClientBills.get({clientId:$routeParams.clientId})

        var question_id = $routeParams.id;
        $scope.comments = Comment.query({questionId: question_id});
        $scope.question = Question.get({ id: question_id  });
    }
]);

//---------------------------------- MANAGEMENT ------------------------------------------


// Feedback admin
controllers.controller('FeedbackCtrl', ['$scope', 'GetFeedback', function($scope, GetFeedback) {
  $scope.feedbacks = GetFeedback.all();
        $scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.feedbacks, function (feedback) {
            feedback.Selected = $scope.selectedAll;
        });
    }
}]);

// User management searching
controllers.controller('SearchUsersControler', ['$scope', 'GetRole', 'GetUser', 'GetMeUser', 'SharedUser', 'UpdateUserByManager', '$location',
    function($scope, GetRole, GetUser, GetMeUser, SharedUser, UpdateUserByManager, $location) {
        $scope.roles = GetRole.all();
        $scope.users = GetUser.all(); 
        

        $scope.deleteUser = function(id, idx) {
            $scope.users.splice(idx, 1);
             return GetUser.delete(id);
        };

        
        $scope.openUpdateUser = function(id, idx) {
            
            $scope.users.splice(idx, 1);
            var obj = new Object();
            obj.user = GetMeUser.dajUsera({id: id},
                function success() {
                SharedUser.set(obj.user);
                //var jsonString = JSON.stringify(Korisnik.get());
                //alert(jsonString);
                $location.path('/edit_user_by_manager');
            }, 
            function err() {
                alert('Došlo je do greške!');
            }
            );
        };

        $scope.banUser = function(id, idx) {
            
            $scope.users.splice(idx, 1);
            var obj = new Object();
            obj.user = GetMeUser.dajUsera({id: id},
                function success() {
                        
                        SharedUser.set(obj.user);
                        $scope.user = SharedUser.get();

                        var obj2 = new Object();
                        obj2.name = $scope.user.name;
                        obj2.surname = $scope.user.surname;
                        obj2.role_id = $scope.user.role_id;
                        obj2.phone = $scope.user.phone;
                        obj2.job = $scope.user.job;
                        obj2.email = $scope.user.email;
                        obj2.adress = $scope.user.adress;
                        obj2.confirmed = 'B';

                        var jsonString= JSON.stringify(obj2);

                        // Moze se iskoristiti vec implementirana metoda za update podataka o useru
                        UpdateUserByManager.update({ id:id }, jsonString, 
                            function success() {
                                alert('Korisnik ' + $scope.user.name + ' je banovan.');
                                SharedUser.set('');
                                // Reloadaj fino podatke u listu
                                $scope.users = GetUser.all(); 
                                $location.path('/user_management'); 
                            }, 
                            function err() {
                                alert('Došlo je do tehničke greške prilikom banovanja korisnika!');
                                $location.path('/user_management'); 
                            });
            }, 
            function err() {
                alert('Došlo je do tehničke greške prilikom banovanja korisnika!');
            });
        };

        $scope.unbanUser = function(id, idx) {
            
            $scope.users.splice(idx, 1);
            var obj = new Object();
            obj.user = GetMeUser.dajUsera({id: id},
                function success() {
                        
                        SharedUser.set(obj.user);
                        $scope.user = SharedUser.get();

                        var obj2 = new Object();
                        obj2.name = $scope.user.name;
                        obj2.surname = $scope.user.surname;
                        obj2.role_id = $scope.user.role_id;
                        obj2.phone = $scope.user.phone;
                        obj2.job = $scope.user.job;
                        obj2.email = $scope.user.email;
                        obj2.adress = $scope.user.adress;
                        obj2.confirmed = 'Y';

                        var jsonString= JSON.stringify(obj2);

                        UpdateUserByManager.update({ id:id }, jsonString, 
                            function success() {
                                alert('Korisnik ' + $scope.user.name + ' je unbanovan.');
                                SharedUser.set('');
                                // Reloadaj fino podatke u listu
                                $scope.users = GetUser.all(); 
                                $location.path('/user_management'); 
                            }, 
                            function err() {
                                alert('Došlo je do tehničke greške prilikom unbanovanja korisnika!');
                                $location.path('/user_management'); 
                            });
            }, 
            function err() {
                alert('Došlo je do tehničke greške prilikom unbanovanja korisnika!');
            });
        };
}]);


// User management - editing data about user
controllers.controller('EditUserByManagerController', ['$scope', 'SharedUser', 'GetRole', 'UpdateUserByManager', '$location',
    function($scope, SharedUser, GetRole, UpdateUserByManager, $location) {
        
        $scope.roles = GetRole.all(); 
        $scope.user = SharedUser.get();
        // Provjera :
        //var jsonString = JSON.stringify(SharedUser.get());
        //alert(jsonString);
        //$scope.role = $scope.user.role_id;
        $scope.editUser = function() {
        // Provjera da li u scopeu ima shareovanog usera
        //var jsonString= JSON.stringify($scope.user);
        //alert(jsonString);

        $scope.user.role_id = $scope.role.id;
            
        var obj = new Object();
        obj.name = $scope.user.name;
        obj.surname = $scope.user.surname;
        obj.role_id = $scope.user.role_id;
        obj.phone = $scope.user.phone;
        obj.job = $scope.user.job;
        obj.email = $scope.user.email;
        obj.adress = $scope.user.adress;
        obj.confirmed = $scope.user.confirmed;
        var jsonString= JSON.stringify(obj);
        //alert(jsonString);
        // Posto se radi o metodi PUT, na ovaj nacin se prosljedjuje id, a zatim i objekat (u nasem slucaju json)
        UpdateUserByManager.update({ id:$scope.user.id }, jsonString, 
            function success() {
                alert('Podaci o korisniku su uspješno izmijenjeni.');
                SharedUser.set('');
                $location.path('/user_management'); 
                // TBD SharedUser set to null
            }, 
            function err() {
                alert('Došlo je do tehničke greške.');
                $location.path('/edit_user_by_manager');
            });
        };


}]);

// Category management searching
controllers.controller('SearchCategoriesControler', ['$scope', 'GetCategory', 
    function($scope, GetCategory) {

        $scope.categories = GetCategory.all(); 

        $scope.deleteCategory = function(id, idx) {
            $scope.categories.splice(idx, 1);
             return GetCategory.delete(id);
        };
  
     }
]);

// Role management searching
controllers.controller('SearchRoleControler', ['$scope', 'GetRole',
    function($scope, GetRole) {

        $scope.roles = GetRole.all(); 

        $scope.deleteRole = function(id, idx) {
            $scope.roles.splice(idx, 1);
             return GetRole.delete(id);
        };
}
    
]);

//Registration users from manager - Possible add role!
controllers.controller('RegistrationUserByManagerController', ['$scope','UserRegister', 'GetRole', '$location',
    function($scope, UserRegister, GetRole, $location){

        $scope.roles = GetRole.all(); 

        $scope.registerUserWithRole = function() {
            $location.path('/register_user_by_manager');
        }

        $scope.registerUser = function(){
            $scope.user.role_id = $scope.role.id;
            UserRegister.register({user: $scope.user},
                function success() {
                    alert("Korisnik je dužan porvrditi registraciju preko email-a, a zatim izvršiti reset passworda preko istog emaila.");
                    $location.path('/user_management');
                }, 
                function err() {
                alert('Pogrešni podaci!');
                $location.path('/register_user_by_manager');
            });
        }
}]);

// Create category
controllers.controller('CreateCategoryControllerByAdmin', ['$scope','CreateCategory', '$location',

    function($scope,CreateCategory,$location) {

        $scope.createCategoryByAdmin = function() {
            $location.path('/new_category');
        }

        $scope.createCategoryC = function(){
         CreateCategory.create ({name: $scope.category.name, 
         description: $scope.category.description}, 
            function success() {
                alert("Kategorija uspješno kreirana!");
                $location.path('/category_admin');
            }, 
            function err(){
                alert("Pogrešni podaci!"); 
                $location.path('/new_category');
             });
        }
    }
]);

//controller for star rating - feedback direcitive
controllers.controller('RatingCtrl', function($scope) {
    $scope.rating = 5;
    $scope.rateFunction = function(rating) {
      alert('Rating selected - ' + rating);
    };
});
//controller for file upload
controllers.controller('NewResourceCtrl', ['$scope', 'uploadsFactory', '$location', 'FileUploader', '$routeParams',
  function($scope, uploadsFactory, $location, FileUploader, $routeParams) {
  $scope.title = "RESOURCES";
  $scope.uploader = new FileUploader({url: '/api/questions/' + $routeParams.id + '/uploads'});

  $scope.upload = function() {
    $scope.uploader.uploadItem(0);
    $location.path('/questions/' + $routeParams.id);
  }
}]);

//controller for uploaded files
/*controllers.controller('ResourcesCtrl', ['$scope', 'uploadsFactory', '$routeParams', function($scope, uploadsFactory, $routeParams) {
  $scope.title = "RESOURCES";
  $scope.question_id = $routeParams.id;

  uploadsFactory.all($routeParams.id)
  .success(function(data) {
    console.log(data);
    $scope.resources = data.document.resources;
  });
}]);
*/

//controller for get uploaded files
controllers.controller('ResourcesCtrl', ['$scope', 'GetUpload', '$routeParams', function($scope, GetUpload, $routeParams) {
  $scope.title = "RESOURCES";
  $scope.question_id = $routeParams.id;
  $scope.uploads = GetUpload.all($routeParams.id);

  
}]);
//Charts controller - Feedback
controllers.controller('ChartsController', ['$scope','GetFeedback', 'GetCategory','$location', 
    function($scope, GetFeedback, GetCategory, $location) {
        $scope.data_pie = GetFeedback.chart();
        $scope.options_pie = {
            chart: {
                type: 'pieChart',
                height: 400,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                labelType: 'percent',
                pie: {},
                donut: true,
                donutRatio: 0.35,
                transitionDuration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 0,
                        left: 0
                    }
                }
            }
    };
    $scope.data_multibar = GetCategory.chart();
    $scope.options_multibar = {
        chart: {
                type: 'multiBarHorizontalChart',
                height: 300,
                width: 700,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: true,
                showValues: true,
                transitionDuration: 500,
                tooltips: false,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Broj pitanja',
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                }
            }
    }

}]);