angular.module('login-app')
   .factory('HomeService', ['$http', 'urls','toastr', function ($http, urls, toastr) {

       return {
           getInfo: function () {
            var info = {};
               return $http.get(urls.API + '/companies')
                    .then(function onSuccess(response){
                      info.company = response.data;
                      $http.get(urls.API + '/companies/'+response.data.idCompany+'/products')
                           .then(function onSuccess(response){
                              info.products = response.data;
                           });
                           return info;
                    })
                    .catch(function onError(response){
                        toastr.error('Fail while fetching data!');
                    })
           }
       };
   }
   ]);
