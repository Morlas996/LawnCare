var app  = angular.module('lawncaresite', ['ngRoute', 'ngResource', 'lawncaresite.services', 
'lawncaresite.factories', 'lawncaresite.controller']);
//controls transition between views
app.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider ){
    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl: "/views/home.html",
        controller: "homeController"

    })
    .when("/contact", {
        templateUrl: "/views/contact.html",
        controller: "contactController"
        
    })
    .when("/about", {
        templateUrl: "/views/about.html"
        
    })
    .when("/service", {
        templateUrl: "/views/services.html"
        
        
    })

    
    .when("/photos", {
        templateUrl: "/views/photos.html"
        
    })
}])