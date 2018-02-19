angular.module('login-app')
   .controller('LoginController', ['$rootScope', '$scope', '$location', '$localStorage', 'LoginService',
       function ($rootScope, $scope, $location, $localStorage, LoginService) {

           $scope.doLogin = function () {

               var userRequest = {
                   email: $scope.user.email,
                   password: $scope.user.password
               };
              
               LoginService.doLogin(userRequest).then(function(response){
                        if(response){
                           window.location = "/home.html";
                        }
               });
           };
       }]);
