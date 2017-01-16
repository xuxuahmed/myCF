//Declaration of movies details controller
angular.module('starter.guideCtrl', [])

     
//  // get movie_details array value to an array called response  
//    $http.get("json/guide.json")


//    .then(function (response){
      
//       //stores response data to scope array details
//       $scope.headings=response.data;
     
//    }) ;
// console.log("hello");

// ;

.controller('MyController', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
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


});
   
 