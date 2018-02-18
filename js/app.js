angular.module('login-app', [
   'ngStorage',
   'toastr'
])
   .constant('urls', {
       API: 'http://localhost:8080'
})
   .config(function($httpProvider) {	
		$httpProvider.interceptors.push(function($localStorage) {
		return {
  			request: function(config) {
	            if ($localStorage.token) {
	           		config.headers['api_token'] = $localStorage.token;
	            }
       			return config;
  			}
		};
	})	
});