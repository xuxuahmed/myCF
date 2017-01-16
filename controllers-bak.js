angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout ) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('MedicineCtrl',['$scope', '$ionicModal','$http',
 function($scope,$ionicModal,$http) { 

  $scope.playlists = [
    { title: 'daily', id: 1 },
    { title: 'oral', id: 2 },
    { title: 'inhaled', id: 3 },
    { title: 'other', id: 4 },
   ]; 

    $http.get("json/daily.json")
  .then(function (response){
      
      //stores response data to scope array details
      $scope.daily=response.data;
  })

// Modal 1
    $ionicModal.fromTemplateUrl('templates/modal-1.html', {
      id: '1', // We need to use and ID to identify the modal that is firing the event!
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    })

    .then(function(modal) {
      $scope.oModal1 = modal;
    
    });

    // Modal 2
    $ionicModal.fromTemplateUrl('templates/modal-2.html', {
      id: '2', // We need to use and ID to identify the modal that is firing the event!
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.oModal2 = modal;
    });
    
     $scope.openModal = function(index) {
      if (index == 1) $scope.oModal1.show();
      else $scope.oModal2.show();
      console.log('in model 1');

    $scope.closeModal = function(index) {
      if (index == 1) $scope.oModal1.hide();
      else $scope.oModal2.hide();
    };

    /* Listen for broadcasted messages */

    $scope.$on('modal.shown', function(event, modal) {
      console.log('Modal ' + modal.id + ' is shown!');
    });

    $scope.$on('modal.hidden', function(event, modal) {
      console.log('Modal ' + modal.id + ' is hidden!');
});
// Cleanup the modals when we're done with them (i.e: state change)
    // Angular will broadcast a $destroy event just before tearing down a scope 
    // and removing the scope from its parent.
    $scope.$on('$destroy', function() {
      console.log('Destroying modals...');
      $scope.oModal1.remove();
      $scope.oModal2.remove();
    });
  }
 }
])



   .controller('FullscreenImageCtrl', ['$scope', '$ionicModal',
    function($scope, $ionicModal) {
    // Modal 1
    $ionicModal.fromTemplateUrl('templates/modal-1.html', {
      id: '1', // We need to use and ID to identify the modal that is firing the event!
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    })

    .then(function(modal) {
      $scope.oModal1 = modal;
    
    })
   
   }])


.controller('MedicinelistCtrl', function($scope, $stateParams) {
  $http.get("json/daily.json")
   .then(function (response){      
      //stores response data to scope array details
      $scope.daily=response.data; 
   }) 
})


.controller('foodsCtrl', function($scope, $http) {
$http.get("json/foods.json")
.then(function (response){
      
      //stores response data to scope array details
      $scope.foods=response.data;
   }) 

  var value=0;
   $scope.showFoods = function(id)
   {
     $scope.ids=id;
    value = id;
    $scope.ids =value;
   }
})


.controller('treatCtrl', function($scope, $ionicModal) {

$ionicModal.fromTemplateUrl('templates/modal-1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
    console.log("treatment model");
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });



console.log("in treatment");

  
})


.controller('MyCtrl', function($scope, $http) {

$http.get("json/guide.json")

   .then(function (response){
      
      //stores response data to scope array details
      $scope.headings=response.data;
           
   }) 



});
