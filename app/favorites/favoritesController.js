'use strict';

var favoritesController = angular.module('favoritesController', []);

favoritesController.controller('FavCtrl', ['$scope', '$localStorage',
    function($scope, $localStorage) {

        $localStorage.characters = [
            {
                "id": 1,
                "game": "Dungeon Slayers",
                "name":"test name",
                "class": "test class",
                "lvl": 5,
                "favorite": true
            },
            {
                "id": 2,
                "game": "Dungeons and Dragons",
                "name":"test name 2",
                "class": "test class 2",
                "lvl": 6,
                "favorite": true
            },
            {
                "id": 3,
                "game": "Dungeon Slayers",
                "name":"test name 3",
                "class": "test class 3",
                "lvl": 7,
                "favorite": false
            }
        ];

        var loadFavorites = function() {
            var characters = $localStorage.characters;
            $scope.favorites = [];

            for (var i = 0; i < characters.length; i++) {
                if(characters[i].favorite) {
                    $scope.favorites.push(characters[i]);
                }
            }
        }

        $scope.showCharacter = function(character) {

        }

        $scope.removeFavorite = function(id) {
            for (var i = 0; i < $localStorage.characters.length; i++) {
                if($localStorage.characters[i].id == id) {
                    $localStorage.characters[i].favorite = false;
                }
            }
            loadFavorites();
        }

        loadFavorites();
      /*$scope.redirectToTimeline = function() {
       $location.path('/timeline');
       };

       $scope.redirectToMaps = function() {
       $location.path('/maps');
       };*/

    }]);