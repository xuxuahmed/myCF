// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

   // THIS IS WHERE THE GLOBAL VARIABLES ARE DEFINED AS A SERVICE NAMED UserService
    /*
        THE PRESCRIPTION VISITS AND FOOD ARRAYS ARE DEFINED HERE AS A GLOBAL SO THAT
        THE CONTENT WILL REMAIN GLOBAL AND UNCHANGED EVEN WHEN PAGE NAVIGATES.
    */
app.factory('UserService', function() {
        return {
            prescription : [
                { id: 1, when: "Morning" ,time: "8:30", am: "AM", name: "Amoxcyllin 20mg", tablet:"2 Tablet"},
                 { id: 2, when: "Noon" ,time: "12:00", am: "PM", name: "Panadin 20mg",tablet:"2 Tablet"},
                 { id: 3, when: "Afternoon" ,time: "4:30", am: "PM", name: "Augmentine 250mg",tablet:"1 Tablet"},
                 { id: 4, when: "Evening" ,time: "9:30", am: "PM", name: "Zinnat 20mg",tablet:"2 Tablet"}
                ],

                treatments : [
                { id: 1, date: "08-Dec-2016",name: "Enzyme Replacement Therapy (ERT)", clinic:"Central Clinic", details: "Balanced low levels of GCase enzyme with a modified version of the normal human enzyme"},
                 { id: 2, date: "14-Nov-2015",name: "Substrate Reduction Therapy (SRT)", clinic:"ADK Hospital", details: "human enzyme"}
                ]
        };
    });
    // GLOBAL VARIABLES END


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })  
    .state('app.cystic', {
      url: '/cystic',
      views: {
        'menuContent': {
          templateUrl: 'templates/cystic.html'
        }
      }
    })
    .state('app.nutrition', {
      url: '/nutrition',
      views: {
        'menuContent': {
          templateUrl: 'templates/nutrition.html',
           controller: 'foodsCtrl'
        }    
    }
    })

    .state('app.nutrition.recipes', {
      url: '/recipes',
      views: {
        'nutrition-recipes': {
          templateUrl: 'templates/recipes.html'
        }    
    }
    })
.state('app.nutrition.guide', {
      url: '/guide',
      views: {
        'nutrition-guide': {
          templateUrl: 'templates/guide.html',
          controller: 'MyCtrl'
        }    
    }
    })
.state('app.nutrition.plans', {
      url: '/plans',
      views: {
        'nutrition-plans': {
          templateUrl: 'templates/plans.html',
          controller: 'foodsCtrl'
        }    
    }
    })
    .state('app.nutrition.foods', {
      url: '/foods',
      views: {
        'nutrition-foods': {
          templateUrl: 'templates/foods.html',
          controller: 'foodsCtrl'
        }    
    }
    })

        .state('app.nutrition.1', {
      url: '/1',
      views: {
        'nutrition-foods': {
          templateUrl: 'templates/1.html',
          controller: 'foodsCtrl'
        }    
    }
    })

    .state('app.nutrition.2', {
      url: '/2',
      views: {
        'nutrition-foods': {
          templateUrl: 'templates/2.html',
          controller: 'foodsCtrl'
        }    
    }
    })


    .state('app.nutrition.3', {
      url: '/3',
      views: {
        'nutrition-foods': {
          templateUrl: 'templates/3.html',
          controller: 'foodsCtrl'
        }    
    }
    })
    .state('app.nutrition.4', {
      url: '/4',
      views: {
        'nutrition-foods': {
          templateUrl: 'templates/4.html',
          controller: 'foodsCtrl'
        }    
    }
    })
.state('app.nutrition.5', {
      url: '/5',
      views: {
        'nutrition-foods': {
          templateUrl: 'templates/5.html',
          controller: 'foodsCtrl'
        }    
    }
    })
.state('app.nutrition.11', {
      url: '/11',
      views: {
        'nutrition-foods': {
          templateUrl: 'templates/11.html',
          controller: 'recipeCtrl'
        }    
    }
    })



    .state('app.treatment', {
      url: '/treatment',
      views: {
        'menuContent': {
          templateUrl: 'templates/treatment.html',
           controller: 'treatCtrl'
        }
      }
    })
     
.state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
           
        }
      }
    })

    .state('app.regimen', {
      url: '/regimen',
      views: {
        'menuContent': {
          templateUrl: 'templates/regimen.html',
           controller: 'MedicineCtrl'
        }
      }
    })
    .state('app.daily', {
      url: '/daily',
      views: {
        'menuContent': {
          templateUrl: 'templates/daily.html',
           controller: 'MedicineCtrl'
        }
      }
    })
    .state('app.feedback', {
      url: '/feedback',
      views: {
        'menuContent': {
          templateUrl: 'templates/feedback.html'
            
        }
      }
    })   
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
           controller: 'IntroCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});









