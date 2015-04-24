var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {

		

		$routeProvider
		.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'loginCtrl'
		})
		.when('/tmpl', {
			templateUrl: 'tmpl/threads.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsRef: function(threadService){
					return threadService.getThreads() 
					}
				}
			})
		// kan den hende alle disse bør ha hver sin controller? hvorfor/ikke?
		.when('/tmpl/:threadId', {
			templateUrl: 'tmpl/thread.html',
			// controller: 'threadsCtrl'
		})
		.otherwise({
			redirectTo: '/login'
		})

});

app.constant('fb', {
  	url: 'https://dazzling-torch-9074.firebaseio.com/'
});