'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'mobile-angular-ui',
  'menuController',
  'favoritesController'
]);

app.run(function () {
    console.log("App running!");
});

app.config([
    '$routeProvider',
    function ($routeProvider) {
        console.log("Route to window")
        $routeProvider.when('/favorites', {
            templateUrl: 'favorites/favorites.html',
            controller: 'FavCtrl',
            resolve: {
                factory: function ($rootScope) {
                    $rootScope.headline = "Favoriten";
                }
            }
        }).when('/ds', {
            templateUrl: 'ds/ds.html',
            //controller: 'dsCtrl',
            resolve: {
                factory: function ($rootScope) {
                    $rootScope.headline = "DS";
                }
            }
        }).otherwise({
            redirectTo: '/favorites'
        });
    }]);
