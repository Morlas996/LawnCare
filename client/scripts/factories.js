var app = angular.module('lawncaresite.factories', [])



app.factory('Menu', ['$resource', function ($resource) {
	return $resource("http://localhost:3000/api/menus", {
		id: "@id"
	}, {
		"update": {
			method: "POST"
		},
        get: {
            isArray: false
        }

	});
}])
app.factory('Login', ['$resource', function ($resource) {
	console.log
	return $resource("http://localhost:3000/api/login/:id", {
	
	})
}]);

