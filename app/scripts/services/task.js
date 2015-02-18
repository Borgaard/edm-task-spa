'use strict'

angular.module('queueSpangularApp')

.factory('Task', function() {
	var Task = {
				impurg: [],
				impnou: [],
				uniurg: [],
				uninou: []
		};
	return Task;
});
