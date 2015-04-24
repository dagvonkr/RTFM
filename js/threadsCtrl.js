var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray) {

	$scope.threads = $firebaseArray(threadsRef);
	console.log('Her er et array med threads, værsågod: ', $scope.threads);

	$scope.threads.$loaded().then(function(threads){
		console.log(threads);
	});

	$scope.createThread = function(title) {
		$scope.threads.$add({
			username: username,
			title: title
		})
	}

});