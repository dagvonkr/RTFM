var app = angular.module('rtfmApp');


// app.constant('fb', { url: 'https://dazzling-torch-9074.firebaseio.com/' });
// Usikker på hva de mener med inject your fb constante

app.service('threadService', function(fb) {

	this.getThreads = function() {
		return new Firebase(fb.url + '/threads');
	}

	this.getThread = function(threadId) {
		return new Firebase(fb.url + '/threads' + '/threadId');
	}

});


