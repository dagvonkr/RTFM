var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $location) {
	$scope.logMeIn = function(username) {
		console.log(username);
		// $location.path('/tmpl')
		$scope.$apply(function(){
			$location.path('/tmpl/' + username);
		});

	}

});