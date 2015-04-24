var app = angular.module('rtfmApp');

app.service('userService', function() {

	var user = {}

	this.login = function(username) {
		console.log(username);
	}	

	this.getUser = function(user) {
		return user;
	}

});

app.constant('fb', { url: 'https://dazzling-torch-9074.firebaseio.com/' });
