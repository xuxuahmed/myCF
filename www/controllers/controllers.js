angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout ) {
 
})

.controller('MedicineCtrl', function($scope, $ionicModal,$http,UserService,$location) {

 $scope.crude=UserService.prescription; 

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
    }).then(function(modal) {
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

// Modal 3
     $ionicModal.fromTemplateUrl('templates/modal-3.html', {
      id: '3', // We need to use and ID to identify the modal that is firing the event!
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.oModal3 = modal;
    });
 
  $scope.openModal = function(index) 
    {  
      if (index == 1) $scope.oModal1.show();
      else if(index==2) $scope.oModal2.show();
      else  if(index==3)$scope.oModal3.show();
      console.log('in model 1 index'
      );

  $scope.deleteDaily = function(name) // Delete Medicine
     {       
        console.log(name);
        $scope.crude.splice(name-1,1); 
        
     }

    $scope.closeModal = function(index) {
      if (index == 1) $scope.oModal1.hide();
      else if  (index == 2)$scope.oModal2.hide();
      else if (index==3) $scope.oModal3.hide();
    };

};

  $scope.addMed = function(name) // Delete a character from listArray
    {       
        console.log('in Add Medicine');
        $scope.crude.push(name); 
    }


$scope.$on('modal.shown', function(event, modal) {
      console.log('Modal ' + modal.id + ' is shown!');
    });

    $scope.$on('modal.hidden', function(event, modal) {
      console.log('Modal ' + modal.id + ' is hidden!');


  $scope.$on('$destroy', function()
   {
      console.log('Destroying modals...');
      $scope.oModal1.remove();
      $scope.oModal2.remove();
    });

});

$scope.close = function() {
 	  close({
      
    }, 500); // close, but give 500ms for bootstrap to animate
  };


})


.controller('foodsCtrl', function($scope, $http) {
$http.get("json/foods.json")
.then(function (response){
      
      //stores response data to scope array details
      $scope.foods=response.data;
   }) 

  var listArray=0;  
   $scope.showFoods = function(id)
   {
     $http.get("json/foods.json")
     .then(function (response){
      
      //stores response data to scope array details
      $scope.foods=response.data;
      angular.forEach($scope.foods, function(food){
         
          if(food.id==id)
           $scope.temp=food;
          
      });

       })  
   }

})

.controller('recipeCtrl', function($scope, $http) {
$http.get("json/recipe.json")
.then(function (response){
      
      //stores response data to scope array details
      $scope.foods=response.data;
   }) 
   

})


.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})



.controller('dataCtrl', function($scope, $http) {
$http.get("json/guide.json")

.then(function (response){
 
      
      //stores response data to scope array details
      $scope.data=response.data;
   }) 
console.log(data);
})

.controller('treatCtrl', function($scope, $ionicModal, UserService,$location) {

 $scope.crude=UserService.treatments;
  
   // Modal 1
    $ionicModal.fromTemplateUrl('templates/modal-add-treat.html', {
      id: '1', // We need to use and ID to identify the modal that is firing the event!
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    }).then(function(modal) {
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
      console.log('in model 1 index');

    $scope.closeModal = function(index) {
      if (index == 1) $scope.oModal1.hide();
      else $scope.oModal2.hide();
    };

    $scope.saveModal = function(p) {
      var newId = UserService.treatments.length+1;
      UserService.treatments.push(p);    
      console.log(UserService.treatments );
    };
   
};




$scope.$on('modal.shown', function(event, modal) {
      console.log('Modal ' + modal.id + ' is shown!');
    });

    $scope.$on('modal.hidden', function(event, modal) {
      console.log('Modal ' + modal.id + ' is hidden!');


  $scope.$on('$destroy', function() {
      console.log('Destroying modals...');
      $scope.oModal1.remove();
      $scope.oModal2.remove();
    });

   });

$scope.close = function() {
 	  close({
      
    }, 500); // close, but give 500ms for bootstrap to animate
  };

  
})




.controller('MyCtrl', function($scope) {
  

});



