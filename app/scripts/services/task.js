'use strict';

angular.module('queueSpangularApp')

.factory('Task', function () {
	
	var taskAllQuads = {
				impurg: [],
				impnou: [],
				uniurg: [],
				uninou: []
		};
	return taskAllQuads;
});
