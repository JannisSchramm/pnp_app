'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'mobile-angular-ui',
  'ngStorage',
  'menuController',
  'favoritesController',
  'dsController'
]);

app.run(function ($localStorage) {
    if($localStorage.characters == null) {
        $localStorage.characters = [];
        console.log("Characters initialized");
    }
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
            controller: 'DsCtrl',
            resolve: {
                factory: function ($rootScope) {
                    $rootScope.headline = "Dungeon Slayers";
                }
            }
        }).otherwise({
            redirectTo: '/favorites'
        });
    }]);
