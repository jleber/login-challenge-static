angular.module('login-app')
   .factory('LoginService', ['$http', '$localStorage', 'urls','toastr', function ($http, $localStorage, urls, toastr) {

       return {
           doLogin: function (data) {
              return $http.post(urls.API + '/users/authenticate', data)
                   .then(function onSuccess(response){;
                      $localStorage.token = response.data.token;
                      return response.data;
                   })
                  .catch(function onError(response){
                      toastr.error('Invalid Email and/or password');
                    })
           }
       };
   }
   ]);