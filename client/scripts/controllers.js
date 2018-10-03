var app = angular.module("lawncaresite.controller", [])

app.controller('menuController', ['$scope', '$location', 'Menu', function($scope, $location, Menu){
        $scope.menu = Menu.query();
 $scope.edit = Menu.query();
    $scope.editMenu = function(){
        var item = new Menu({
			Id: $scope.id,
			
            Dish: $scope.Dish,
            Category: $scope.Category,
            Description: $scope.Description,
            
        });
        item.$save(function(success){
            $route.reload();
        })
    }


}])

app.controller('contactController', ['$scope', '$location', 'Login', function ($scope, $location, Login) {
	
	$scope.sendEmail = function () {
		var newMessage = new Menu({
			email: $scope.from,
			subject: "a new friend",
			message: $scope.content
		});

		newMessage.$save(function () {
		
			$location.path('/');

		});

	};
	

}]);

app.controller('homeController', ['$scope', '$location', 'Menu', function ($scope, $location, Menu) {
	

}]);
app.controller('editController', ['$scope', '$location', 'Menu', 'UserService', function ($scope, $location, Menu, UserService) {
	
	
}])
.controller('loginController', ['$scope', '$location', 'UserService',
		
			
	function ($scope, $location, UserService) {
			

			

			$scope.login = function () {
				UserService.login($scope.email, $scope.password).then(function () {
					redirect();
				}, function (err) {
					console.log(err);
				})
			}
            function redirect() {
				var dest = $location.search().p;
				if (!dest) {
					dest = '/';
				}
				$location.path(dest).search('p', null);
			}
			$('body').removeClass();
		}
	])