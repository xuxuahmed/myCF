// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers'])

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
    .state('app.treatment', {
      url: '/treatment',
      views: {
        'menuContent': {
          templateUrl: 'templates/treatment.html',
           controller: 'treatCtrl'
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
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
           controller: 'MedicineCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});









