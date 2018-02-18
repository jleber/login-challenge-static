angular.module('login-app')
  .controller('HomeController', ['$rootScope', '$scope', 'HomeService','toastr', 
    function ($rootScope, $scope, HomeService, toastr) {

       $scope.$watch('$viewContentLoaded', function(){  
              HomeService.getInfo().then(function(response){
                $scope.info = response;
              });
      });

   }]);